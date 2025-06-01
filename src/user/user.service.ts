import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLoginDTO } from 'src/DTOs/user-login.dto';
import { UserDTO } from 'src/DTOs/User.dto';
import { User } from 'src/entities/user.entity';
import { CryptoService } from 'src/services/crypto/crypto.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly cryptoService: CryptoService,
  ) {}

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`user with id ${id} not found`);
    }

    return user;
  }

  async login(credentials: UserLoginDTO) {
    const user = await this.userRepository.findOneBy({
      username: credentials.username,
    });

    if (!user) {
      throw new ForbiddenException('Incorrect credentials.');
    }

    if (
      !this.cryptoService.comparePassword(credentials.password, user.password)
    ) {
      throw new ForbiddenException('Incorrect password');
    }

    return user;
  }

  /**
   * used to save user's information
   * @todo: implement DB Service
   * @param user UserDTO
   */
  async createUser(user: UserDTO) {
    return await this.userRepository.save(user);
  }

  async list(limit: number = 10, offset: number = 0) {
    return await this.userRepository.find({
      take: limit,
      skip: offset,
      order: { createdAt: 'desc' },
    });
  }

  async findByUsername(username: string, includePosts: boolean): Promise<User> {
    const query = {
      where: { username },
    };

    if (includePosts) {
      query['relations'] = { posts: true };
    }

    const user = await this.userRepository.findOne(query);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
