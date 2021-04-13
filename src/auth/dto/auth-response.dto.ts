import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString } from 'class-validator';

export class AuthResponseDTO implements Readonly<AuthResponseDTO> {
  @ApiModelProperty({ required: true })
  @IsString()
  token: string;
}
