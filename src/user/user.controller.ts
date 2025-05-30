import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from 'src/DTOs/User.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

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

    @Get()
    list() {
        
    }
}
