import { User } from 'src/entities/user.entity';

export class PostCreatedEvent {
  title: string;
  user: User;
}
