import type { NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    this._log(req);

    next();
  }

  private _log(req: Request): void {
    const { method, baseUrl, hostname, query, body } = req;

    let logMessage = `${method} request: route - ${baseUrl}, host - ${hostname}`;

    if (Object.keys(query).length) {
      logMessage += `\n query params - ${JSON.stringify(query, null, 2)}`;
    }

    if (Object.keys(body).length) {
      logMessage += `\n body - ${JSON.stringify(body, null, 2)}`;
    }

    Logger.verbose(logMessage.trim());
  }
}
