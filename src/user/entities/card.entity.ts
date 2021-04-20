import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'integer' })
  cvc: number;

  @Column({ type: 'varchar', length: 20 })
  number: string;

  @Column({ length: 5 })
  expire: string;

  @Column()
  cardholder: string;

  @ManyToOne(() => UserEntity, (user) => user.cards, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;
}
