import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CryptoService } from './services/crypto/crypto.service';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../database.sqlite',
    entities: [Post, User],
    logging: true,
    synchronize: true,
  }), PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
