import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { CreateCardDTO } from './dto/create-card.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Post('card')
  public async addCard(@Body(new ValidationPipe()) userCard: CreateCardDTO) {
    return this.userService.addCard(userCard);
  }

  @Delete()
  public async deleteUser(
    @Body(new ValidationPipe()) deleteUser: DeleteUserDTO,
  ) {
    return await this.userService.delete(deleteUser);
  }
}
