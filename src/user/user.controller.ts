import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserLoginDTO } from 'src/DTOs/user-login.dto';
import { UserDTO } from 'src/DTOs/User.dto';
import { UserService } from './user.service';
import { PasswordInterceptor } from './interceptors/password/password.interceptor';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('register')
    @UseInterceptors(PasswordInterceptor)
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

    @Get()
    list() {
        return this.userService.list();
    }

    @Post('login')
    login(@Body() userLogin: UserLoginDTO) {
        return this.userService.login(userLogin);
    }
}
