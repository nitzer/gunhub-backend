import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDTO } from 'src/DTOs/user-login.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() userLogin: UserLoginDTO) {
    return this.authService.login(userLogin);
  }
}
