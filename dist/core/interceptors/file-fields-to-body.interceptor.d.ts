import type { Observable } from 'rxjs';
import { type CallHandler, type ExecutionContext, type NestInterceptor } from '@nestjs/common';
export declare class FileFieldsToBodyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<unknown>): Observable<unknown>;
}
