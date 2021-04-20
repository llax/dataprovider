import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { UserSecurityModel } from './models/user-security.model';
import { CreateUserDTO } from './dto/create-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { CardEntity } from './entities/card.entity';
import { CreateCardDTO } from './dto/create-card.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>,
    @InjectRepository(CardEntity)
    private readonly cardRepo: Repository<CardEntity>,
  ) {}

  public async getAll(): Promise<UserDTO[]> {
    return await this.repo
      .find({ relations: ['cards'] })
      .then((entities) => entities.map((entity) => UserDTO.fromEntity(entity)));
  }

  public async findOne(username: string) {
    return await this.repo.findOne({ where: { username } });
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

  public async setToken(user: UserEntity, token: string) {
    user.token = token;
    return this.repo.save(user);
  }

  public async addCard(createCard: CreateCardDTO): Promise<UserDTO> {
    const user = await this.repo.findOne({
      where: { id: createCard.userId },
      relations: ['cards'],
    });
    if (!user) {
      throw new BadRequestException();
    }

    const card = this.cardRepo.create({ ...createCard });
    if (!user.cards) user.cards = [];
    user.cards.push(card);

    return this.repo.save(user).then((entity) => UserDTO.fromEntity(entity));
  }
}
