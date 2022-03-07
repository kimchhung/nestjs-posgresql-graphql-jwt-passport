// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

@ObjectType()
export class User {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  age: number;
}

// * MonngoDb
export type UserDocument = User & Document;

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
