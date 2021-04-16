import { IsUUID } from 'class-validator';

export class DeleteTvShowDTO implements Readonly<DeleteTvShowDTO> {
  @IsUUID()
  id: string;
}
