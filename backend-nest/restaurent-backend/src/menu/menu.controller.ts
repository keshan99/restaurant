import { Controller, Get, Param, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import type { DayMenu, MenuResponse } from './menu.types';

@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getMenus(@Query('days') days?: string): MenuResponse {
    const daysNum = days ? Number(days) : 3;
    return this.menuService.getMenus(daysNum);
  }

  @Get(':dateKey')
  getMenuByDate(@Param('dateKey') dateKey: string): DayMenu {
    return this.menuService.getMenuByDate(dateKey);
  }
}
