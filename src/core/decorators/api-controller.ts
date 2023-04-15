import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/**
 * Use with controllers where all methods are security
 */
export const ApiController = (...tags: string[]): ClassDecorator => applyDecorators(ApiTags(...tags), ApiBearerAuth());
