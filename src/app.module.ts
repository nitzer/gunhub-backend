import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {}
