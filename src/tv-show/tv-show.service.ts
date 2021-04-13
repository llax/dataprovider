import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TvShowEntity } from './entities/tv-show.entity';
import { Repository } from 'typeorm';
import { TvShowSeriesEntity } from './entities/tv-show-series.entity';
import { TvShowDTO } from './dto/tv-show.dto';
import { CreateTvShowDTO } from './dto/create-tv-show.dto';
import { FindTvShowDTO } from './dto/find-tv-show.dto';
import { DeleteTvShowDTO } from './dto/delete-tv-show.dto';
import { CreateTvShowEpisodeDTO } from './dto/create-tv-show-episode.dto';

@Injectable()
export class TvShowService {
  constructor(
    @InjectRepository(TvShowEntity)
    private tvShowRepo: Repository<TvShowEntity>,
    @InjectRepository(TvShowSeriesEntity)
    private tvShowSeriesRepo: Repository<TvShowSeriesEntity>,
  ) {}

  public async getAll(): Promise<TvShowDTO[]> {
    return this.tvShowRepo.find({ relations: ['episodes'] });
  }

  public async createTvShow(tvShowDTO: CreateTvShowDTO): Promise<TvShowDTO> {
    const tvShow = this.tvShowRepo.create(tvShowDTO);
    return this.tvShowRepo.save(tvShow);
  }

  public findTvShow({ id }: FindTvShowDTO): Promise<TvShowDTO> {
    return this.tvShowRepo.findOne(id, { relations: ['episodes'] });
  }

  public deleteTvShow({ id }: DeleteTvShowDTO) {
    return this.tvShowRepo.delete(id);
  }

  public async addTvShowEpisode(newEpisode: CreateTvShowEpisodeDTO) {
    const tvShow = await this.tvShowRepo.findOne(newEpisode.id, {
      relations: ['episodes'],
    });
    const episode = this.tvShowSeriesRepo.create({
      episode: newEpisode.episode,
      season: newEpisode.season,
      path: newEpisode.path,
    });
    if (!tvShow.episodes) tvShow.episodes = [];
    tvShow.episodes.push(episode);
    return this.tvShowRepo.save(tvShow);
  }
}
