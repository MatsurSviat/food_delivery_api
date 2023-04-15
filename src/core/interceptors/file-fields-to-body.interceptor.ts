import type { Request } from 'express';
import type { Observable } from 'rxjs';
import { type CallHandler, type ExecutionContext, Injectable, type NestInterceptor } from '@nestjs/common';

@Injectable()
export class FileFieldsToBodyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<unknown>): Observable<unknown> {
    const req: Request = context.switchToHttp().getRequest();

    const files = req.files as Record<string, Express.Multer.File[]>;
    const fileFields = Object.keys(files);

    if (req.body && fileFields.length) {
      fileFields.forEach(field => {
        req.body[field] = files[field];
      });
    }

    return next.handle();
  }
}
