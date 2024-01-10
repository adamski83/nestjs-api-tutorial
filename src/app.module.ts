import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_DB_KEY}@cluster0.tpnmxe2.mongodb.net/?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
})
export class AppModule {}
