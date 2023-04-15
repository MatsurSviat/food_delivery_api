import type { DynamicModule, Provider } from '@nestjs/common';
import { Module } from '@nestjs/common';

import { PasswordEncoderService } from './services/password-encoder.service';

@Module({})
export class PasswordEncoderModule {
  static forRoot(): DynamicModule {
    const providers: Provider[] = [PasswordEncoderService];

    return {
      module: PasswordEncoderModule,
      providers,
      exports: providers,
    };
  }
}
