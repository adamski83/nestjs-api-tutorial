import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from 'src/schemas/User.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
  UserSettings,
  UsersSettingsSchema,
} from 'src/schemas/UserSettings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserSettings.name, schema: UsersSettingsSchema },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
