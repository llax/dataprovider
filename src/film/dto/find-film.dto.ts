import { IsUUID } from 'class-validator';

export class FindFilmDTO implements Readonly<FindFilmDTO> {
  @IsUUID()
  id: string;
}
