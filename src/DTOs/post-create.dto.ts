import { IsNotEmpty } from "class-validator";
import { User } from "src/entities/user.entity";
import { ManyToOne } from "typeorm";

export class PostCreateDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    modelKitName: string;

    image: string;

    user: User
}