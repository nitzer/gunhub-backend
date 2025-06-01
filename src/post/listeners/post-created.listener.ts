import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PostCreatedEvent } from '../events/post-created.event';

@Injectable()
export class PostCreatedListener {
  /**
   * This will notify users following the author of a new post
   * @param event
   */
  @OnEvent('post.created')
  handlePostCreatedEvent(event: PostCreatedEvent) {
    console.log(`New post "${event.title}" from ${event.user.username}`);
  }
}
