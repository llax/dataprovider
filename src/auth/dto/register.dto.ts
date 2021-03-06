import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterDTO implements Readonly<RegisterDTO> {
  @ApiModelProperty({ required: true })
  @IsString()
  username: string;

  @ApiModelProperty({ required: true })
  @IsString()
  password: string;

  @ApiModelProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  surname: string;
}
