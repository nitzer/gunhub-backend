import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostService } from 'src/post/post.service';

@Injectable()
export class DayLimitGuard implements CanActivate {
  constructor(private readonly postService: PostService){}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const hasPost = await this.postService.hasPostInLastDay(request.user);
    if (hasPost) {
      throw new HttpException('You need to wait at least 24 hours from your last post to create a new one.', HttpStatus.LOCKED);
    }
    return !hasPost;
  }
}
