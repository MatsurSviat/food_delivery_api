import { type ArgumentsHost, type ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
export declare class AllExceptionFilter implements ExceptionFilter {
    private readonly _httpAdapterHost;
    private readonly _logger;
    constructor(_httpAdapterHost: HttpAdapterHost);
    catch(exception: unknown, host: ArgumentsHost): void;
}
