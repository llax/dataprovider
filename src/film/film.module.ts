import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { FilmEntity } from './entities/film.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FilmEntity])],
  providers: [FilmService],
  controllers: [FilmController],
})
export class FilmModule {}
