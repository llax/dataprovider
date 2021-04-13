import { IsUUID } from 'class-validator';

export class DeleteFilmDTO implements Readonly<DeleteFilmDTO> {
  @IsUUID()
  id: string;
}
