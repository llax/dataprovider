import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { UserSecurityModel } from './models/user-security.model';
import { CreateUserDTO } from './dto/create-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>,
  ) {}

  public async getAll(): Promise<UserDTO[]> {
    return await this.repo
      .find()
      .then((entities) => entities.map((entity) => UserDTO.fromEntity(entity)));
  }

  public async create(
    userDto: CreateUserDTO,
    security: UserSecurityModel,
  ): Promise<UserDTO> {
    return this.repo
      .save(CreateUserDTO.toEntity(userDto, security))
      .then((entity) => UserDTO.fromEntity(entity));
  }

  public async delete({ id }: DeleteUserDTO) {
    return await this.repo.delete(id);
  }
}
