import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export default function Paginated<TItem>(TItemClass: Type<TItem>) {
  // `isAbstract` decorator option is mandatory to prevent registering in schema
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => TItemClass)
    docs: TItem;

    @Field(() => Int)
    totalDocs: number;

    @Field(() => Int)
    limit: number;

    // * Page info

    @Field(() => Int)
    page: number;

    @Field(() => Int)
    totalPages: number;

    @Field(() => Boolean)
    hasNextPage: boolean;

    @Field(() => Boolean)
    hasPrevPage: boolean;

    @Field(() => Int)
    nextPage: number;

    @Field(() => Int)
    prevPage: number;

    @Field(() => Int)
    pagingCounter: number;
  }
  return PaginatedType;
}
