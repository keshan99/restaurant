export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  badge?: string;
  imageUrl: string;
}

export interface MenuSection {
  id: string;
  title: string;
  hours?: string;
  items: MenuItem[];
}

export interface MenuHighlight {
  badge: string;
  title: string;
  description: string;
}

export interface DayMenu {
  date: string;
  updatedAt: string;
  highlight: MenuHighlight;
  sections: MenuSection[];
}

export interface MenuResponse {
  timezone: string;
  days: number;
  dateKeys: string[];
  menus: DayMenu[];
}

export interface Contact {
  restaurantName: string;
  phoneDisplay: string;
  phoneTel: string;
}
