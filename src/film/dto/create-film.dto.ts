import { IsString } from 'class-validator';

export class CreateFilmDTO implements Readonly<CreateFilmDTO> {
  @IsString()
  path: string;
}
