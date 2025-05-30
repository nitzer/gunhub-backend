import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/DTOs/User.dto';

@Injectable()
export class UserService {
    private users: UserDTO[] = [];

    /**
     * @param id number
     * @returns 
     */
    findById(id: number): UserDTO | undefined {
        return this.users.find(user => user.id === id);
    }

    /**
     * used to save user's information
     * @todo: implement DB Service
     * @param user UserDTO
     */
    createUser(user: UserDTO): void {
        this.users.push(user);
    }

    /**
     * Mainly used to check the email is unique and does not exists.
     * @param email 
     * @returns 
     */
    findByEmail(email:string): UserDTO | undefined  {
        return this.users.find(user => user.email === email);
    }

    /**
     * Used for getting into a user's feed.
     * @param username
     * @returns 
     */
    findByUsername(username: string): UserDTO | undefined {
        return this.users.find(user=> user.username === username);
    }

    getUsers(): UserDTO[] {
        return this.users;
    }
}
