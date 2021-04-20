import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNumber, IsUUID, Matches } from 'class-validator';

export class CreateCardDTO implements Readonly<CreateCardDTO> {
  @ApiModelProperty({ required: true })
  @IsNumber()
  cvc: number;

  @ApiModelProperty({ required: true })
  @IsUUID()
  userId: string;

  @ApiModelProperty({ required: true })
  @Matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/)
  number: string;

  @ApiModelProperty({ required: true })
  @Matches(/^[0-9]{2}\/[0-9]{2}/)
  expire: string;

  @ApiModelProperty({ required: true })
  @Matches(/^.+ .+/)
  cardholder: string;
}
