import { IsInt, IsString, IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class TvShowSeriesDTO implements Readonly<TvShowSeriesDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: false })
  @IsInt()
  season: number;

  @ApiModelProperty({ required: false })
  @IsInt()
  episode: number;

  @ApiModelProperty({ required: true })
  @IsString()
  path: string;
}
