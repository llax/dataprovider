import { IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class DeleteFilmDTO implements Readonly<DeleteFilmDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;
}
