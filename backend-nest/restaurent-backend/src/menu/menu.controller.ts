import { Controller, Get, Param, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import type { DayMenu, MenuResponse } from './menu.types';

@Controller('api/:slug/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getMenus(
    @Param('slug') slug: string,
    @Query('days') days?: string,
  ): Promise<MenuResponse> {
    const daysNum = days ? Number(days) : 3;
    return this.menuService.getMenus(slug, daysNum);
  }

  @Get(':dateKey')
  async getMenuByDate(
    @Param('slug') slug: string,
    @Param('dateKey') dateKey: string,
  ): Promise<DayMenu> {
    return this.menuService.getMenuByDate(slug, dateKey);
  }
}
