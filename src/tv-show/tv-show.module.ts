import { Module } from '@nestjs/common';
import { TvShowService } from './tv-show.service';
import { TvShowController } from './tv-show.controller';

@Module({
  providers: [TvShowService],
  controllers: [TvShowController],
})
export class TvShowModule {}
