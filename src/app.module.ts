import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CryptoService } from './services/crypto/crypto.service';
import { AuthModule } from './auth/auth.module';
import { PostSubscriber } from './post/subscribers/post.subscribers';
import { AuthController } from './auth/auth.controllers';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../database.sqlite',
      entities: [Post, User],
      logging: true,
      synchronize: true,
      subscribers: [PostSubscriber],
    }),
    PostModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, CryptoService],
})
export class AppModule {
}
