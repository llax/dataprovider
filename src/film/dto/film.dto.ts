import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString, IsUUID } from 'class-validator';

export class FilmDTO implements Readonly<FilmDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: true })
  @IsString()
  title: string;

  @ApiModelProperty({ required: true })
  @IsString()
  path: string;
}
