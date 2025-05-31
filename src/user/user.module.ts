import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoService } from 'src/services/crypto/crypto.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers: [UserService, CryptoService],
    exports: [UserService]
})
export class UserModule {}