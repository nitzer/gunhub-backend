import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCreateDTO } from 'src/DTOs/post-create.dto';
import { Posts } from 'src/entities/posts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(@InjectRepository(Posts) private postRepository: Repository<Posts>) {}
    private posts = [];
    async list() {
        return await this.postRepository.find()
    }

    async add(newPost: PostCreateDTO) {
        const {title, description, modelKitName, image} = newPost;
        const post = this.postRepository.create({
            title,
            description,
            modelKitName,
            image,
        });

        return await this.postRepository.save(post);
    }
}
