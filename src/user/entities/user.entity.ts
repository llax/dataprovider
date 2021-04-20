import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CardEntity } from './card.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  username: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  token: string;

  @OneToMany(() => CardEntity, (card) => card.user, {
    cascade: true,
  })
  cards: CardEntity[];
}
