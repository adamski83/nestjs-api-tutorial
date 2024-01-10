import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUsers.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() CreateUserDto: CreateUserDto) {
    // console.log(CreateUserDto);
    return this.userService.createUser(CreateUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User nto found', 404);
    const findUser = await this.userService.getUserById(id);
    if (!findUser) throw new HttpException('User nto found', 404);
    return findUser;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() UpdateUserDto: UpdateUserDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedUser = await this.userService.updateUser(id, UpdateUserDto);
    if (!updatedUser) throw new HttpException('User nto found', 404);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedUser = await this.userService.deleteUser(id);
    if (!deletedUser) throw new HttpException('User not found', 404);
    return;
  }
}
