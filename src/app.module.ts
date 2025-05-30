import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Post } from './entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../database.sqlite',
    entities: [Post],
    logging: true,
    synchronize: true,
  })],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {}
