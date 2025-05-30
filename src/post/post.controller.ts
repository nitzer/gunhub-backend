import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDTO } from 'src/DTOs/post-create.dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}
    @Get()
    async list(){
       return await this.postService.list();
    }

    @Post('create')
    async create(@Body() post: PostCreateDTO) {
        await this.postService.add(post);
        return 'Post created';
    }
}
