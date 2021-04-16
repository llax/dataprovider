import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TvShowService } from './tv-show.service';
import { TvShowController } from './tv-show.controller';
import { TvShowEntity } from './entities/tv-show.entity';
import { TvShowSeriesEntity } from './entities/tv-show-series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TvShowEntity, TvShowSeriesEntity])],
  providers: [TvShowService],
  controllers: [TvShowController],
})
export class TvShowModule {}
