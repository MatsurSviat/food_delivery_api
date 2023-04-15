import { Injectable, PipeTransform } from '@nestjs/common';

import type { User } from '@entities';

import { PasswordEncoderService } from '../services/password-encoder.service';

@Injectable()
export class EncodePasswordPipe<TUser extends User> implements PipeTransform<TUser, Promise<TUser>> {
  constructor(private readonly _passwordEncoderService: PasswordEncoderService) {}

  async transform(user: TUser): Promise<TUser> {
    user.password = await this._passwordEncoderService.encode(user.password);

    return user;
  }
}
