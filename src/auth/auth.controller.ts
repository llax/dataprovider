import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { AuthResponseDTO } from './dto/auth-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body(new ValidationPipe()) login: LoginDTO,
  ): Promise<AuthResponseDTO> {
    return this.authService.login(login);
  }

  @Post('register')
  async register(
    @Body(new ValidationPipe()) register: RegisterDTO,
  ): Promise<AuthResponseDTO> {
    return this.authService.register(register);
  }
}
