// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as Chance from 'chance';
import { FilterQuery, PaginateModel, PaginateOptions } from 'mongoose';
import { CreateUserInput } from './dto/user.input.ts';

import { User, UserDocument } from './dto/user.model';
import { UserPagination } from './dto/user.pagination';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: PaginateModel<UserDocument>,
  ) {}

  async create(userData: CreateUserInput): Promise<User> {
    const createdUser = this.userModel.create(userData);
    return createdUser;
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async find(): Promise<User[]> {
    const users = this.userModel.find().lean();
    return users;
  }

  async paginate(query?: FilterQuery<User>, options?: PaginateOptions) {
    return new Object(
      this.userModel.paginate(query, options),
    ) as Promise<UserPagination>;
  }

  async dump(amount: Number) {
    const users: User[] = [];

    for (let i = 0; i < amount; i++) {
      const chance = new Chance();
      const userData = {
        age: chance.age(),
        name: chance.name(),
        lean: true,
        email: chance.email(),
      };
      const newUser = await this.create(userData);
      users.push(newUser);
    }

    return users;
  }
}
