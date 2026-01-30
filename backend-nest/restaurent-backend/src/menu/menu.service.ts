import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import type {
  DayMenu,
  MenuResponse,
  MenuItem,
  MenuSection,
} from './menu.types';

@Injectable()
export class MenuService {
  constructor(private readonly supabaseService: SupabaseService) {}

  /**
   * Convert a date to ISO date string in Asia/Colombo timezone
   */
  private toISODateColombo(d: Date): string {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Colombo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(d);

    const y = parts.find((p) => p.type === 'year')?.value;
    const m = parts.find((p) => p.type === 'month')?.value;
    const day = parts.find((p) => p.type === 'day')?.value;
    return `${y}-${m}-${day}`;
  }

  /**
   * Add days to a date
   */
  private addDays(date: Date, days: number): Date {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  /**
   * Get restaurant by slug
   */
  async getRestaurant(slug: string = 'terracotta-bistro') {
    const supabase = this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Restaurant not found: ${slug}`);
    }

    return data;
  }

  /**
   * Get menu sections with items for a restaurant
   */
  async getMenuSectionsWithItems(restaurantId: string): Promise<MenuSection[]> {
    const supabase = this.supabaseService.getClient();

    // Get sections
    const { data: sections, error: sectionsError } = await supabase
      .from('menu_sections')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (sectionsError) {
      throw new Error(`Failed to fetch sections: ${sectionsError.message}`);
    }

    // Get items for all sections
    const sectionIds = sections.map((s) => s.id);
    const { data: items, error: itemsError } = await supabase
      .from('menu_items')
      .select('*')
      .in('section_id', sectionIds)
      .eq('is_available', true)
      .order('sort_order', { ascending: true });

    if (itemsError) {
      throw new Error(`Failed to fetch items: ${itemsError.message}`);
    }

    // Group items by section
    return sections.map((section) => ({
      id: section.id,
      title: section.title,
      hours: section.hours || undefined,
      items: items
        .filter((item) => item.section_id === section.id)
        .map((item) => ({
          id: item.id,
          name: item.name,
          price: Number(item.price),
          description: item.description,
          tags: item.tags || [],
          badge: item.badge || undefined,
          imageUrl: item.image_url,
        })),
    }));
  }

  /**
   * Get menus for multiple days
   */
  async getMenus(slug: string, days: number = 3): Promise<MenuResponse> {
    const safeDays = Number.isFinite(days) ? Math.min(Math.max(days, 1), 7) : 3;

    // Get restaurant by slug
    const restaurant = await this.getRestaurant(slug);
    const sections = await this.getMenuSectionsWithItems(restaurant.id);

    const today = new Date();
    const payload: DayMenu[] = [];
    const keys: string[] = [];

    // For now, we return the same sections for each day
    // Future: Add scheduling table to vary items per day
    for (let i = 0; i < safeDays; i++) {
      const dateKey = this.toISODateColombo(this.addDays(today, i));
      keys.push(dateKey);

      payload.push({
        date: dateKey,
        updatedAt: '10:30 AM',
        highlight: {
          badge: i === 0 ? "Chef's Selection" : i === 1 ? 'Seasonal' : 'New',
          title:
            i === 0
              ? "Today's Highlight"
              : i === 1
                ? "Tomorrow's Highlight"
                : 'Next Day Highlight',
          description:
            'Pan-Seared Arctic Char: Sustainably sourced, served with charred leek emulsion, heirloom radish, and citrus-infused oil.',
        },
        sections,
      });
    }

    return {
      timezone: restaurant.timezone || 'Asia/Colombo',
      days: payload.length,
      dateKeys: keys,
      menus: payload,
    };
  }

  /**
   * Get a single day's menu by date key
   */
  async getMenuByDate(slug: string, dateKey: string): Promise<DayMenu> {
    const today = new Date();

    // Validate date is within next 7 days
    let isValidDate = false;
    let dayIndex = 0;
    for (let i = 0; i < 7; i++) {
      const k = this.toISODateColombo(this.addDays(today, i));
      if (k === dateKey) {
        isValidDate = true;
        dayIndex = i;
        break;
      }
    }

    if (!isValidDate) {
      throw new NotFoundException({
        error: 'Menu not found for dateKey',
        dateKey,
      });
    }

    const restaurant = await this.getRestaurant(slug);
    const sections = await this.getMenuSectionsWithItems(restaurant.id);

    return {
      date: dateKey,
      updatedAt: '10:30 AM',
      highlight: {
        badge:
          dayIndex === 0
            ? "Chef's Selection"
            : dayIndex === 1
              ? 'Seasonal'
              : 'New',
        title:
          dayIndex === 0
            ? "Today's Highlight"
            : dayIndex === 1
              ? "Tomorrow's Highlight"
              : 'Next Day Highlight',
        description:
          'Pan-Seared Arctic Char: Sustainably sourced, served with charred leek emulsion, heirloom radish, and citrus-infused oil.',
      },
      sections,
    };
  }
}
