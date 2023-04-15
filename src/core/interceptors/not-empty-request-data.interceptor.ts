import type { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import type { Request } from 'express';
import type { Observable } from 'rxjs';
import { BadRequestException } from '@nestjs/common';

export class NotEmptyRequestDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<unknown>): Observable<unknown> | Promise<Observable<unknown>> {
    const request: Request = context.switchToHttp().getRequest();

    const isEmpty = [request.body, request.file, request.files]
      .map((data: object | undefined) => Object.keys(data || {}).length)
      .every((dataLength: number) => dataLength === 0);

    if (isEmpty) {
      throw new BadRequestException('Data from dody cannot be empty!');
    }

    return next.handle();
  }
}
