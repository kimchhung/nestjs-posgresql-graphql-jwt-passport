// src/user/user.resolver.ts
import { Injectable } from '@nestjs/common';
import {
  Args,
  ArgsType,
  Mutation,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { CreateUserArg, optionArgs } from './dto/user.arg.ts';
import { User, UserDocument } from './dto/user.model';
import { UserPagination } from './dto/user.pagination';
import { UserService } from './user.service';
@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private _user: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('userData') userData: CreateUserArg) {
    return this._user.create(userData);
  }

  @Mutation(() => [User])
  async dumpUsers(@Args('amount') amount: number) {
    const users = this._user.dump(amount);
    return users;
  }

  @Query(() => UserPagination)
  async users(@Args('options') options?: optionArgs) {
    const userPagination = await this._user.paginate({}, options);

    return userPagination;
  }
}
