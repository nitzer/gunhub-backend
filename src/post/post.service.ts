import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCreateDTO } from 'src/DTOs/post-create.dto';
import { PostUpdateDTO } from 'src/DTOs/post-update.dto';
import { Post } from 'src/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async list(limit: number = 10, offset: number = 0) {
    return await this.postRepository.find({
      take: limit,
      skip: offset,
      order: { createdAt: 'DESC' },
    });
  }

  async add(newPost: PostCreateDTO, user: any) {
    const { title, description, modelKitName, image } = newPost;
    const post = this.postRepository.create({
      title,
      description,
      modelKitName,
      image,
      user,
    });

    return await this.postRepository.save(post);
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({
      id: id,
    });

    if (!post) {
      throw new NotFoundException(`Post ${id} not found`);
    }

    return post;
  }

  async update(id: number, updatedPost: PostUpdateDTO) {
    const post = await this.findOne(id);
    this.postRepository.merge(post, updatedPost);

    return await this.postRepository.save(post);
  }

  async delete(id: number) {
    const post = await this.findOne(id);

    return await this.postRepository.delete(post);
  }
}
