import { Injectable, NotFoundException } from '@nestjs/common';
import { DayMenu, MenuResponse } from './menu.types';

@Injectable()
export class MenuService {
  private readonly MENU_TEMPLATES: Omit<DayMenu, 'date'>[] = [
    // Day 0
    {
      updatedAt: '10:30 AM',
      highlight: {
        badge: "Chef's Selection",
        title: "Today's Highlight",
        description:
          'Pan-Seared Arctic Char: Sustainably sourced, served with charred leek emulsion, heirloom radish, and citrus-infused oil.',
      },
      sections: [
        {
          id: 'small-plates',
          title: 'Small Plates',
          hours: '11:30 AM — 9:00 PM',
          items: [
            {
              id: 'burrata-fig',
              name: 'Burrata & Fig',
              price: 18,
              description:
                'Creamy Puglia burrata, honey balsamic reduction, toasted sourdough crumbs, and mission figs.',
              tags: ['V', 'GF Available'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
            },
            {
              id: 'charred-octopus',
              name: 'Charred Octopus',
              price: 24,
              description:
                'Spanish octopus, smoked paprika, silky potato foam, and chorizo-infused oil droplets.',
              tags: ['GF'],
              badge: 'Popular',
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBOmRctpCmJXoEj1-Kb2IoVXd4xXnY4D-u37CbgNGiDaHGX2G51ObLfKG6bPSHx4ab1ANrRHpMl6d07bzkQVmG5tBl01Xs-pvHxnBmoBXgC3jVdjuyVEJWcWYXZRZe_Q4APLo4u8sUEjR7WkiOWKOv8ocjwG-BBq-Nr5a8no0pDYoZw-9J7S_WlgkIiSuvRNr5psZ76Bd6dz9N4MSzmzHr1suZtTaO2DJRsPq1lQvQhSu9jV4XMUEZi9vBESB-hGJ41iV33akyHUMjY',
            },
            {
              id: 'winter-squash',
              name: 'Winter Squash Salad',
              price: 16,
              description:
                'Roasted butternut squash, whipped Greek feta, toasted pepitas, and a cider vinaigrette.',
              tags: ['VG', 'GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDFD2hVEG3zIDd4lva6tuHrqIDDCNppSKicWP4c8d8x9AZJJLEVRPOJYtkSmvblN7OF39pylSNdxMENeAvglnxq5oNH_ya85_j3bcU4kHDw3zWhwQ_0G6aYSYmb2L2myzgXhEFHK-P8JQHVQN3sU8HrNa_iH1I6iORPPDpnVC6gYCG4fdJid6rUem9YTHScc7w9Y8H1Ehpu3QvwDWxSQGZPq0zaXDGKVA5rr-I-uSLMKKLULOxMPwUl0KGCHVOlVAZjEVLO8GrFJ305',
            },
          ],
        },
        {
          id: 'main-courses',
          title: 'Main Courses',
          items: [
            {
              id: 'beef-tenderloin',
              name: 'Aged Beef Tenderloin',
              price: 42,
              description:
                '28-day aged, bone marrow butter, truffled pomme purée, and seasonal greens.',
              tags: ['GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
            },
            {
              id: 'mushroom-risotto',
              name: 'Wild Mushroom Risotto',
              price: 28,
              description:
                'Carnaroli rice, foraged woodland mushrooms, aged parmesan, and fresh thyme.',
              tags: ['V', 'GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
            },
          ],
        },
      ],
    },

    // Day 1
    {
      updatedAt: '10:30 AM',
      highlight: {
        badge: 'Seasonal',
        title: "Tomorrow's Highlight",
        description:
          'Wood-Fired Lamb Shoulder: slow-roasted, served with smoked aubergine, mint yogurt, and pomegranate glaze.',
      },
      sections: [
        {
          id: 'small-plates',
          title: 'Small Plates',
          hours: '11:30 AM — 9:00 PM',
          items: [
            {
              id: 'tom-1',
              name: 'Citrus Prawn Crudo',
              price: 22,
              description: 'Chilled prawns, citrus, chili oil, sea salt.',
              tags: ['GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
            },
            {
              id: 'tom-2',
              name: 'Roasted Beet Carpaccio',
              price: 16,
              description: 'Goat cheese, pistachio dust, aged balsamic.',
              tags: ['V', 'GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDFD2hVEG3zIDd4lva6tuHrqIDDCNppSKicWP4c8d8x9AZJJLEVRPOJYtkSmvblN7OF39pylSNdxMENeAvglnxq5oNH_ya85_j3bcU4kHDw3zWhwQ_0G6aYSYmb2L2myzgXhEFHK-P8JQHVQN3sU8HrNa_iH1I6iORPPDpnVC6gYCG4fdJid6rUem9YTHScc7w9Y8H1Ehpu3QvwDWxSQGZPq0zaXDGKVA5rr-I-uSLMKKLULOxMPwUl0KGCHVOlVAZjEVLO8GrFJ305',
            },
          ],
        },
        {
          id: 'main-courses',
          title: 'Main Courses',
          items: [
            {
              id: 'tom-3',
              name: 'Wood-Fired Lamb Shoulder',
              price: 44,
              description: 'Smoked aubergine, mint yogurt, pomegranate glaze.',
              tags: ['GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
            },
            {
              id: 'tom-4',
              name: 'Herb Gnocchi',
              price: 26,
              description: 'Brown butter, sage, shaved pecorino.',
              tags: ['V'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
            },
          ],
        },
      ],
    },

    // Day 2
    {
      updatedAt: '10:30 AM',
      highlight: {
        badge: 'New',
        title: 'Next Day Highlight',
        description:
          'Seared Scallops: caramelized corn purée, pickled shallot, and brown butter caper sauce.',
      },
      sections: [
        {
          id: 'small-plates',
          title: 'Small Plates',
          hours: '11:30 AM — 9:00 PM',
          items: [
            {
              id: 'nxt-1',
              name: 'Truffle Deviled Eggs',
              price: 14,
              description: 'Silky yolk, truffle, chive.',
              tags: ['GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBOmRctpCmJXoEj1-Kb2IoVXd4xXnY4D-u37CbgNGiDaHGX2G51ObLfKG6bPSHx4ab1ANrRHpMl6d07bzkQVmG5tBl01Xs-pvHxnBmoBXgC3jVdjuyVEJWcWYXZRZe_Q4APLo4u8sUEjR7WkiOWKOv8ocjwG-BBq-Nr5a8no0pDYoZw-9J7S_WlgkIiSuvRNr5psZ76Bd6dz9N4MSzmzHr1suZtTaO2DJRsPq1lQvQhSu9jV4XMUEZi9vBESB-hGJ41iV33akyHUMjY',
            },
            {
              id: 'nxt-2',
              name: 'Baked Camembert',
              price: 18,
              description: 'Garlic confit, thyme, toasted bread.',
              tags: ['V'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
            },
          ],
        },
        {
          id: 'main-courses',
          title: 'Main Courses',
          items: [
            {
              id: 'nxt-3',
              name: 'Seared Scallops',
              price: 40,
              description: 'Corn purée, pickled shallot, caper brown butter.',
              tags: ['GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
            },
            {
              id: 'nxt-4',
              name: 'Charcoal Chicken',
              price: 32,
              description: 'Lemon jus, herbs, market greens.',
              tags: ['GF'],
              imageUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
            },
          ],
        },
      ],
    },
  ];

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
   * Get menus for multiple days
   */
  getMenus(days: number = 3): MenuResponse {
    const safeDays = Number.isFinite(days) ? Math.min(Math.max(days, 1), 7) : 3;

    const today = new Date();
    const payload: DayMenu[] = [];
    const keys: string[] = [];

    for (let i = 0; i < safeDays; i++) {
      const dateKey = this.toISODateColombo(this.addDays(today, i));
      keys.push(dateKey);

      // Cycle through templates if we request more than 3 days
      const template = this.MENU_TEMPLATES[i % this.MENU_TEMPLATES.length];

      payload.push({
        ...template,
        date: dateKey, // Inject the dynamic date
      });
    }

    return {
      timezone: 'Asia/Colombo',
      days: payload.length,
      dateKeys: keys,
      menus: payload,
    };
  }

  /**
   * Get a single day's menu by date key
   */
  getMenuByDate(dateKey: string): DayMenu {
    const today = new Date();

    // Try to match generated keys for next 7 days
    for (let i = 0; i < 7; i++) {
      const k = this.toISODateColombo(this.addDays(today, i));
      if (k === dateKey) {
        const template = this.MENU_TEMPLATES[i % this.MENU_TEMPLATES.length];
        return {
          ...template,
          date: dateKey,
        };
      }
    }

    throw new NotFoundException({
      error: 'Menu not found for dateKey',
      dateKey,
    });
  }
}
