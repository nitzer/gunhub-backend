import { ForbiddenException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDTO } from 'src/DTOs/user-login.dto';
import { UserService } from 'src/user/user.service';
import { CryptoService } from '../services/crypto/crypto.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly cryptoService: CryptoService,
        private readonly jwtService: JwtService,
    ){}

    async login(credentials: UserLoginDTO) {
        const user = await this.userService.findByUsername(credentials.username);

        if (!user) {
            throw new ForbiddenException("Incorrect credentials.");
        }

        if (!await this.cryptoService.comparePassword(credentials.password, user.password)) {
            throw new ForbiddenException("Incorrect password");
        }

        const payload = {
            id: user.id,
            username: user.username,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
