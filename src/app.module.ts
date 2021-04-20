import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';
import { TvShowModule } from './tv-show/tv-show.module';
import { configService } from './config/config.service';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    TerminusModule,
    UserModule,
    AuthModule,
    FilmModule,
    TvShowModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
