import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmDTO } from './dto/film.dto';
import { CreateFilmDTO } from './dto/create-film.dto';
import { DeleteFilmDTO } from './dto/delete-film.dto';
import { FindFilmDTO } from './dto/find-film.dto';

@Controller('film')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  async getFilms(): Promise<FilmDTO[]> {
    return this.filmService.getAll();
  }

  @Get('one')
  async findFilm(
    @Body(new ValidationPipe()) film: FindFilmDTO,
  ): Promise<FilmDTO> {
    return this.filmService.find(film);
  }

  @Post()
  async storeFilm(
    @Body(new ValidationPipe()) film: CreateFilmDTO,
  ): Promise<FilmDTO> {
    return this.filmService.createFilm(film);
  }

  @Post('delete')
  async deleteFilm(@Body(new ValidationPipe()) film: DeleteFilmDTO) {
    return this.filmService.delete(film);
  }
}
