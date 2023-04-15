import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { AppConfigService } from '@shared/config';

@Injectable()
export class PasswordEncoderService {
  constructor(private readonly _configService: AppConfigService) {}

  encode(password: string): Promise<string> {
    return hash(password, this._configService.passwordEncoderSalt);
  }

  compare(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return compare(plainTextPassword, hashedPassword);
  }
}
