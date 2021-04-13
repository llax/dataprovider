import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';
import { TvShowModule } from './tv-show/tv-show.module';
import { CardModule } from './card/card.module';
import { configService } from './config/config.service';

@Module({
  imports: [
    UserModule,
    AuthModule,
    FilmModule,
    TvShowModule,
    CardModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
