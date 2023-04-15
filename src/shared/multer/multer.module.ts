import type { DynamicModule, Provider } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

import { MulterService } from './services/multer.service';

@Module({})
export class AppMulterModule {
  static forRoot(): DynamicModule {
    const modules = [
      MulterModule.register({
        storage: memoryStorage(),
        preservePath: true,
      }),
    ];

    const providers: Provider[] = [MulterService];

    return {
      module: AppMulterModule,
      imports: modules,
      providers,
      exports: [...modules, ...providers],
    };
  }
}
