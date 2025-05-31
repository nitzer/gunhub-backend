import { Module } from '@nestjs/common';
import { Post } from 'src/entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
    imports:[TypeOrmModule.forFeature([Post]), UserModule],
    controllers:[PostController],
    providers: [PostService]
})
export class PostModule {}
