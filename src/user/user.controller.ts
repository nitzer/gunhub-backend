import { Body, Controller, Get, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserDTO } from 'src/DTOs/User.dto';
import { UserService } from './user.service';
import { PasswordInterceptor } from './interceptors/password/password.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';

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

    @UseGuards(AuthGuard)
    @Get('/me')
    async getProfile(@Req() request) {
        const {password, ...userData } = await this.userService.findByUsername(request.user.username, true);
    
        return userData;
    }
}
