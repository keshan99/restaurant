import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';
import type { Contact } from './menu/menu.types';

@Injectable()
export class AppService {
  constructor(private readonly supabaseService: SupabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getContact(slug: string): Promise<Contact> {
    const supabase = this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('restaurants')
      .select('name, phone_display, phone_tel')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Restaurant not found: ${slug}`);
    }

    return {
      restaurantName: data.name,
      phoneDisplay: data.phone_display,
      phoneTel: data.phone_tel,
    };
  }
}
