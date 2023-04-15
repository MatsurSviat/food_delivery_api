import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';

import type { User } from '@entities';

export const AuthenticatedUser = createParamDecorator(
  <T extends Partial<User> = User>(dataKey: Array<keyof User> = [], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    let data = request.user;

    if (dataKey.length) {
      data = dataKey.reduce((acc, key) => {
        acc[key] = data[key];

        return acc;
      }, {} as T);
    }

    return data;
  },
);
