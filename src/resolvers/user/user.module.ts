import { Module } from '@nestjs/common';
import { PasswordService } from '../../services/password.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService, PasswordService],
})
export class UserModule {}
