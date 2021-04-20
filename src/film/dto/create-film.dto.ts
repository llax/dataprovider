import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateFilmDTO implements Readonly<CreateFilmDTO> {
  @ApiModelProperty({ required: true })
  @IsString()
  title: string;

  @ApiModelProperty({ required: true })
  @IsString()
  path: string;
}
