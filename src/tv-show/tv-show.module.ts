import { Module } from '@nestjs/common';
import { TvShowService } from './tv-show.service';

@Module({
  providers: [TvShowService],
})
export class TvShowModule {}
