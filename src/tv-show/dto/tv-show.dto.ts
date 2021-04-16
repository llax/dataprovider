import { IsString, IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class TvShowDTO implements Readonly<TvShowDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: true })
  @IsString()
  title: string;
}
