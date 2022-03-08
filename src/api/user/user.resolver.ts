// src/user/user.resolver.ts
import { Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginateOptionArgs } from 'src/common/pagination/pagination.args';
import { CreateUserInput } from './dto/user.input.ts';
import { User } from './dto/user.model';
import { UserPagination } from './dto/user.pagination';
import { UserService } from './user.service';

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private _user: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('userData') userData: CreateUserInput) {
    return this._user.create(userData);
  }

  @Mutation(() => [User])
  async dumpUsers(@Args('amount') amount: Number) {
    const users = await this._user.dump(amount);
    return users;
  }

  @Query(() => UserPagination)
  async users(@Args() options: PaginateOptionArgs) {
    return await this._user.paginate({}, options);
  }
}
