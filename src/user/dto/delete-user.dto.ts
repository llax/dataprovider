import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsUUID } from 'class-validator';

export class DeleteUserDTO implements Readonly<DeleteUserDTO> {
  @ApiModelProperty({ required: true })
  @IsUUID()
  id: string;
}
