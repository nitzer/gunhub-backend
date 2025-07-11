import { Module } from '@nestjs/common';
import { CryptoService } from 'src/services/crypto/crypto.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controllers';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'this should be in another place',
      signOptions: {
        expiresIn: '24h',
      },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, CryptoService],
  exports: [AuthService],
})
export class AuthModule {}
