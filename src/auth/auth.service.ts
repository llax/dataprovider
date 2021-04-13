import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { LoginDTO } from './dto/login.dto';

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
    if (!user || password !== user.password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, id: user.id };
    const token = this.jwtService.sign(payload);
    await this.userService.setToken(user, token);

    return { token };
  }
}
