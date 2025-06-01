import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class IsUniqueMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  use(req: Request, res: Response, next: () => void) {
    if (req.body && req.body.username) {
    }
    next();
  }
}
