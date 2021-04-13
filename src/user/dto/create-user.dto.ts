import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsEmail, IsString } from 'class-validator';
import { UserSecurityModel } from '../models/user-security.model';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDTO implements Readonly<CreateUserDTO> {
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

  @ApiModelProperty({ required: true })
  @IsString()
  password: string;

  public static toEntity(userDto: CreateUserDTO, security: UserSecurityModel) {
    const it = new UserEntity();
    Object.assign(it, userDto, security);
    return it;
  }
}
