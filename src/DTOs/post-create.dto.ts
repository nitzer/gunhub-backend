import { IsNotEmpty } from 'class-validator';
import { User } from 'src/entities/user.entity';

export class PostCreateDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  modelKitName: string;

  image: string;

  user: User;
}
