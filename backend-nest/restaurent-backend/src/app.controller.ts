import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { Contact } from './menu/menu.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): { ok: boolean } {
    return { ok: true };
  }

  @Get('api/contact')
  getContact(): Contact {
    return this.appService.getContact();
  }
}
