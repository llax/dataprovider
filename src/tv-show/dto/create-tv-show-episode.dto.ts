import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateTvShowEpisodeDTO
  implements Readonly<CreateTvShowEpisodeDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: true })
  @IsInt()
  @IsOptional()
  season: number;

  @ApiModelProperty({ required: true })
  @IsInt()
  @IsOptional()
  episode: number;

  @ApiModelProperty({ required: true })
  @IsString()
  path: string;
}
