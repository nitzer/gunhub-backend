import { IsAlphanumeric, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UserDTO {
    @IsNotEmpty()
    @IsAlphanumeric()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}