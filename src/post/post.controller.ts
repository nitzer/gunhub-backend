import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  Patch,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDTO } from 'src/DTOs/post-create.dto';
import { PostUpdateDTO } from 'src/DTOs/post-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async list() {
    return await this.postService.list();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() post: PostCreateDTO, @Request() req: Request) {
    await this.postService.add(post, req['user']);
    return 'Post created';
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedPost: PostUpdateDTO,
  ) {
    return await this.postService.update(id, updatedPost);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.postService.delete(id);
    return `Post ${id} successfully deleted.`;
  }
}
