import { IsAlphanumeric, IsEmail, IsEmpty, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UserDTO {
    @IsEmpty()
    readonly id: number;

    @IsNotEmpty()
    @IsAlphanumeric()
    @MinLength(4)
    @MaxLength(20)
    readonly username: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    createdAt?: string;
}