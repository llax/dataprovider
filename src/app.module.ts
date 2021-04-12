import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';
import { TvShowModule } from './tv-show/tv-show.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [UserModule, AuthModule, FilmModule, TvShowModule, CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
