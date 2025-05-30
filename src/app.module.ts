import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Posts } from './entities/posts.entity';
import { User } from './entities/user.entity';
import { PostModule } from './post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../database.sqlite',
    entities: [Posts, User],
    logging: true,
    synchronize: true,
  }), PostModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {}
