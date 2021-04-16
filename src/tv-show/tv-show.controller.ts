import { Body, Controller, Get, Post } from '@nestjs/common';
import { TvShowService } from './tv-show.service';
import { TvShowDTO } from './dto/tv-show.dto';
import { CreateTvShowDTO } from './dto/create-tv-show.dto';
import { CreateTvShowEpisodeDTO } from './dto/create-tv-show-episode.dto';

@Controller('tv-show')
export class TvShowController {
  constructor(private tvShow: TvShowService) {}

  @Get()
  async getAll(): Promise<TvShowDTO[]> {
    return this.tvShow.getAll();
  }

  @Post()
  async newTvShow(@Body() tvShow: CreateTvShowDTO): Promise<TvShowDTO> {
    return this.tvShow.createTvShow(tvShow);
  }

  @Post('episode')
  async newEpisode(
    @Body() episode: CreateTvShowEpisodeDTO,
  ): Promise<TvShowDTO> {
    return this.tvShow.addTvShowEpisode(episode);
  }

  @Post('delete')
  async deleteTvShow(@Body() tvShow: TvShowDTO) {
    return this.tvShow.deleteTvShow(tvShow);
  }
}
