import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { User } from './user.model';

@ObjectType()
export class Post extends BaseModel {
  title: string;
  content: string;
  publishedAt?: Date;
  author: User;
}
