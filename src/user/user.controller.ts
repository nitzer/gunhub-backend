import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserLoginDTO } from 'src/DTOs/user-login.dto';
import { UserDTO } from 'src/DTOs/User.dto';
import { AuthService } from 'src/services/auth/auth.service';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Post('register')
    register(@Body() user:UserDTO) {
        try {
            this.userService.createUser(user);
            return {
                'message': 'user created.'
            }
        } catch (error) {
            return {
                'message': 'nope.'
            }
        }
    }

    @Post()
    login(@Body() userLogin: UserLoginDTO) {
        this.authService.login(userLogin);
    }
}
