import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FilmEntity } from './entities/film.entity';

import { FilmDTO } from './dto/film.dto';
import { FindFilmDTO } from './dto/find-film.dto';
import { CreateFilmDTO } from './dto/create-film.dto';
import { DeleteFilmDTO } from './dto/delete-film.dto';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(FilmEntity) private repo: Repository<FilmEntity>,
  ) {}

  public async getAll(): Promise<FilmDTO[]> {
    return this.repo.find();
  }

  public async find({ id }: FindFilmDTO): Promise<FilmDTO> {
    return await this.repo.findOne({ where: { id } });
  }

  public async createFilm(createFilmDTO: CreateFilmDTO): Promise<FilmDTO> {
    const film = this.repo.create(createFilmDTO);
    return this.repo.save(film);
  }

  public async delete({ id }: DeleteFilmDTO) {
    return await this.repo.delete(id);
  }
}
