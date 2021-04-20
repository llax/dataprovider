import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { TvShowSeriesEntity } from './tv-show-series.entity';
import { TvShowSeriesDTO } from '../dto/tv-show-series.dto';

@Entity()
export class TvShowEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => TvShowSeriesEntity, (series) => series.show, {
    cascade: true,
  })
  episodes: TvShowSeriesDTO[];
}
