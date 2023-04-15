import { Controller, Get } from '@nestjs/common';

import type { IAuthData } from '@models/interfaces';
import { ApiController, AuthenticatedUser } from '@core/decorators';

import { SelfDto } from '../models';
import { UserService } from '../services';

@ApiController('User')
@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('self')
  self(@AuthenticatedUser() user: IAuthData): SelfDto {
    return user;
  }
}
