import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Post()
  public async createUser(@Body() userDto: UserDTO): Promise<UserDTO> {
    return await this.userService.create(userDto, {
      token: 'kekw',
      password: 'lolw',
    });
  }
}
