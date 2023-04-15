import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppConfigService } from './services/config.service';
import { validate } from './validator/config.validator';

@Module({})
export class AppConfigModule {
  static forRoot(): DynamicModule {
    const providers: Provider[] = [AppConfigService];

    return {
      module: AppConfigModule,
      imports: [
        ConfigModule.forRoot({
          cache: true,
          envFilePath: ['environments/.env'],
          validate,
        }),
      ],
      providers,
      exports: providers,
    };
  }
}
