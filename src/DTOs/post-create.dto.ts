import { IsNotEmpty } from "class-validator";

export class PostCreateDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    modelKitName: string;

    image: string;
}