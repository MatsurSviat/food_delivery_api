import type { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';

import { AppValidationPipe } from '@core/pipes';
import { PUBLIC_PATH } from '@models/constants';
import { AppConfigService } from '@shared/config';

import { AppModule } from './app.module';

function configureApplication(app: NestExpressApplication, { clientUrl }: AppConfigService): void {
  app
    .setGlobalPrefix('api')
    .useGlobalPipes(new AppValidationPipe())
    .useStaticAssets(PUBLIC_PATH)
    .use(compression())
    .enableCors({
      credentials: true,
      origin: [clientUrl],
    });
}

function configureSwagger(
  app: NestExpressApplication,
  { swaggerConfig: { title, description, path } }: AppConfigService,
): void {
  const config = new DocumentBuilder().setTitle(title).setDescription(description).addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(path, app, document);
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<AppConfigService>(AppConfigService);

  const configs = [configureApplication, configureSwagger];

  for (const configureCallback of configs) {
    configureCallback(app, config);
  }

  await app.listen(config.port);
}

bootstrap();
