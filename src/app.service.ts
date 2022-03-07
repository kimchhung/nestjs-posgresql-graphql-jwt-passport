import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

  getHelloName(name: string) {
    return `Hello ${name}!`;
  }
}
