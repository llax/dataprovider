import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateTvShowDTO implements Readonly<CreateTvShowDTO> {
  @ApiModelProperty({ required: true })
  @IsString()
  title: string;
}
