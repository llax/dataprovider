import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { AuthResponseDTO } from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ username, password }: LoginDTO) {
    const user = await this.userService.findOne(username);
    if (!user || (await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, email: user.email };
    const token = this.jwtService.sign(payload);
    await this.userService.setToken(user, token);

    return { token } as AuthResponseDTO;
  }

  async register(user: RegisterDTO) {
    const payload = { username: user.username, email: user.email };
    const token = this.jwtService.sign(payload);

    const password = await bcrypt.hash(user.password, 10);
    await this.userService.create(user, { password, token });
    return { token } as AuthResponseDTO;
  }
}
