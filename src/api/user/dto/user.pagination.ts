import { ObjectType } from '@nestjs/graphql';
import Paginated from 'src/common/pagination/pagination';
import { User, UserDocument } from './user.model';

@ObjectType()
export class UserPagination extends Paginated(User) {}
