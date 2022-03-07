// src/user/user.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserArg {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}

@InputType()
export class optionArgs {
  @Field({ nullable: true })
  lean: boolean;
  @Field({ nullable: true })
  leanWithId: boolean | undefined;
  @Field({ nullable: true })
  offset: number;
  @Field({ nullable: true })
  page?: number;
  @Field({ nullable: true })
  limit?: number;
  @Field({ nullable: true })
  /* If pagination is set to `false`, it will return all docs without adding limit condition. (Default: `true`) */
  @Field({ nullable: true })
  pagination?: boolean;
}
