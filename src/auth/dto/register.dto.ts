import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString } from 'class-validator';

export class RegisterDTO implements Readonly<RegisterDTO> {
  @ApiModelProperty({ required: true })
  @IsString()
  username: string;

  @ApiModelProperty({ required: true })
  @IsString()
  password: string;

  @ApiModelProperty({ required: true })
  @IsString()
  email: string;

  @ApiModelProperty({ required: false })
  @IsString()
  name: string;

  @ApiModelProperty({ required: false })
  @IsString()
  surname: string;
}
