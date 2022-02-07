import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Wood!';
  }

  getHi(): string {
    return 'Hello everyone';
  }
}
