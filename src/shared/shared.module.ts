import { type DynamicModule, Global, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ENTITIES } from '@entities';

import { AppConfigModule, AppConfigService } from './config';
import { AppMulterModule } from './multer';
import { PasswordEncoderModule } from './password-encoder';

@Global()
@Module({})
export class SharedModule {
  static share(): DynamicModule {
    const sharedModules = [
      // external
      TypeOrmModule.forRootAsync({
        useFactory: (configService: AppConfigService) => configService.databaseConfig,
        inject: [AppConfigService],
      }),
      TypeOrmModule.forFeature(ENTITIES),
      ScheduleModule.forRoot(),
      // internal
      AppConfigModule.forRoot(),
      PasswordEncoderModule.forRoot(),
      AppMulterModule.forRoot(),
    ];

    return {
      module: SharedModule,
      imports: sharedModules,
      exports: sharedModules,
    };
  }
}
