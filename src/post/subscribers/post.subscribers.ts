import { Post } from 'src/entities/post.entity';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
  listenTo() {
    return Post;
  }

  afterInsert(event: InsertEvent<Post>) {
    console.log(`${event.entity.user.username} created ${event.entity.title}`);
  }
}
