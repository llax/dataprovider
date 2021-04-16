import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TvShowEntity } from './tv-show.entity';
import { TvShowDTO } from '../dto/tv-show.dto';

@Entity()
export class TvShowSeriesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'integer', nullable: true })
  season: number;

  @Column({ type: 'integer', nullable: true })
  episode: number;

  @Column()
  path: string;

  @ManyToOne(() => TvShowEntity, (show) => show.episodes)
  show: TvShowDTO;
}
