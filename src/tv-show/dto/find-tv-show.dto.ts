import { IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class FindTvShowDTO implements Readonly<FindTvShowDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;
}
