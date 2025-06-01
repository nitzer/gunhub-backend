import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { CryptoService } from 'src/services/crypto/crypto.service';

@Injectable()
export class PasswordInterceptor implements NestInterceptor {
  constructor(private readonly cryptoService: CryptoService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request: Request = context.switchToHttp().getRequest();
    if (request.body && request.body.password !== undefined) {
      request.body.password = await this.cryptoService.hashPassword(
        request.body.password,
      );
    }

    return next.handle();
  }
}
