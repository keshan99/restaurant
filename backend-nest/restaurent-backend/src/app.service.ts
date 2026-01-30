import { Injectable } from '@nestjs/common';
import { Contact } from './menu/menu.types';

@Injectable()
export class AppService {
  private readonly CONTACT: Contact = {
    restaurantName: 'The Terracotta Bistro',
    phoneDisplay: '(555) 123-4567',
    phoneTel: '+15551234567',
  };

  getHello(): string {
    return 'Hello World!';
  }

  getContact(): Contact {
    return this.CONTACT;
  }
}
