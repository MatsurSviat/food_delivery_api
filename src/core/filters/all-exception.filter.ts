import { type ArgumentsHost, Catch, type ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import type { IExceptionWithErrorResponse } from './models';

const exceptionWithMessage = (exception: unknown): exception is IExceptionWithErrorResponse =>
  typeof exception === 'object' && exception !== null && 'response' in exception;

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly _logger: Logger = new Logger(AllExceptionFilter.name);

  constructor(private readonly _httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this._httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exceptionWithMessage(exception) ? exception.response.message : 'Internal server error';

    const responseBody = {
      statusCode: httpStatus,
      message,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    this._logger.error(
      `Date: ${responseBody.timestamp} - Status: ${responseBody.statusCode} - Message: ${responseBody.message} - Url: ${responseBody.path}`,
    );

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
