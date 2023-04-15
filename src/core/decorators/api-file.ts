import type { ApiPropertyOptions } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export const ApiFile =
  (options?: ApiPropertyOptions): PropertyDecorator =>
  (target, propertyKey) => {
    const decoratorOptions: ApiPropertyOptions = options?.isArray
      ? {
          type: 'array',
          items: {
            type: 'file',
            properties: {
              [propertyKey]: {
                type: 'string',
                format: 'binary',
              },
            },
          },
        }
      : {
          type: 'file',
          properties: {
            [propertyKey]: {
              type: 'string',
              format: 'binary',
            },
          },
        };

    ApiProperty(decoratorOptions)(target, propertyKey);
  };
