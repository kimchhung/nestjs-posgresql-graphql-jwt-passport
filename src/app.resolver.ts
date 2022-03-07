import { Args, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private _app: AppService) {}
  @Query(() => String)
  helloWorld() {
    return this._app.getHello;
  }
  @Query(() => String)
  hello(@Args('name') name: string) {
    return this._app.getHelloName(name);
  }
}
