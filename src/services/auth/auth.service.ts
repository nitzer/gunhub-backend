import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserLoginDTO } from 'src/DTOs/user-login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    login(userlogin: UserLoginDTO) {

    }
}
