import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsEmail, IsString, IsUUID } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  @ApiModelProperty({ required: false })
  @IsUUID()
  id: string;

  @ApiModelProperty({ required: true })
  @IsString()
  username: string;

  @ApiModelProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiModelProperty({ required: false })
  @IsString()
  name: string;

  @ApiModelProperty({ required: false })
  @IsString()
  surname: string;

  @ApiModelProperty({ required: false })
  @IsString()
  password: string;

  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    Object.assign(it, dto);
    return it;
  }

  public static fromEntity(entity: UserEntity) {
    return this.from({
      id: entity.id,
      username: entity.username,
      email: entity.email,
      name: entity.name,
      surname: entity.surname,
    });
  }

  public static toEntity(userDto: UserDTO) {
    const it = new UserEntity();
    Object.assign(it, userDto);
    return it;
  }
}
