import { IsNotEmpty } from 'class-validator';

export class PostUpdateDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  modelKitName: string;

  @IsNotEmpty()
  image: string;
}
