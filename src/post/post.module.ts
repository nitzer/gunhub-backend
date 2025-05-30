import { Module } from '@nestjs/common';
import { Posts } from 'src/entities/posts.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Posts])],
    controllers:[PostController],
    providers: [PostService]
})
export class PostModule {}
