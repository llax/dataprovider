import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  path: string;
}
