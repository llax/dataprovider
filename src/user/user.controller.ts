import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Post('/delete')
  public async deleteUser(@Body() deleteUser: DeleteUserDTO) {
    return await this.userService.delete(deleteUser);
  }
}
