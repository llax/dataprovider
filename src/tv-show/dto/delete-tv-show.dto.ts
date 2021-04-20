import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsUUID } from 'class-validator';

export class DeleteTvShowDTO implements Readonly<DeleteTvShowDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;
}
