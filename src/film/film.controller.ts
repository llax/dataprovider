import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FilmService } from './film.service';

import { FilmDTO } from './dto/film.dto';
import { CreateFilmDTO } from './dto/create-film.dto';
import { DeleteFilmDTO } from './dto/delete-film.dto';

import { InternalServerErrorFilter } from '../internal-error.filter';

@ApiTags('film')
@Controller('film')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  async getFilms(): Promise<FilmDTO[]> {
    return this.filmService.getAll();
  }

  @Get('/:id')
  @UseFilters(new InternalServerErrorFilter())
  async findFilm(@Param('id') id: string): Promise<FilmDTO> {
    return this.filmService.find({ id });
  }

  @Post()
  async storeFilm(
    @Body(new ValidationPipe()) film: CreateFilmDTO,
  ): Promise<FilmDTO> {
    return this.filmService.createFilm(film);
  }

  @Delete()
  async deleteFilm(@Body(new ValidationPipe()) film: DeleteFilmDTO) {
    return this.filmService.delete(film);
  }
}
