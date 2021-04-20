import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsUUID, Matches } from 'class-validator';
import { UserEntity } from '../entities/user.entity';
import { CardEntity } from '../entities/card.entity';

export class CardDTO implements Readonly<CardDTO> {
  @ApiModelProperty({ required: false })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: true })
  @Matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/)
  number: string;

  @ApiModelProperty({ required: true })
  @Matches(/^[0-9]{2}\/[0-9]{2}/)
  expire: string;

  @ApiModelProperty({ required: true })
  @Matches(/^.+ .+/)
  cardholder: string;

  public static from(dto: Partial<CardDTO>) {
    const it = new CardDTO();
    Object.assign(it, dto);
    return it;
  }

  public static fromEntity(entity: CardEntity) {
    return this.from({
      id: entity.id,
      number: entity.number,
      expire: entity.expire,
      cardholder: entity.cardholder,
    });
  }

  public static toEntity(userDto: CardDTO) {
    const it = new UserEntity();
    Object.assign(it, userDto);
    return it;
  }
}
