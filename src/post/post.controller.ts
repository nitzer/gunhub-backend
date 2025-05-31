import { Controller, Get, Post, Body, ParseIntPipe, Param, Patch, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDTO } from 'src/DTOs/post-create.dto';
import { PostUpdateDTO } from 'src/DTOs/post-update.dto';

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

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.postService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updatedPost: PostUpdateDTO) {
        return await this.postService.update(id, updatedPost);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        await this.postService.delete(id);
        return `Post ${id} successfully deleted.`
    }
}
