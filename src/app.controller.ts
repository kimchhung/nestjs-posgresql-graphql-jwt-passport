import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly _app: AppService) {}

  @Get()
  getHello(): string {
    return this._app.getHello();
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this._app.getHelloName(name);
  }
}
