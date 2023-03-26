import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos/user.dto';
import { UserService } from 'src/domain/services/user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('user')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('users')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Put('user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete('user/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
