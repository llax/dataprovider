import { IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class FindFilmDTO implements Readonly<FindFilmDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;
}
