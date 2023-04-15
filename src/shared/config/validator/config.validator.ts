import type { ConfigFactory } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { EnvironmentVariables } from './environment-variables';

export function validate(config: ReturnType<ConfigFactory>): EnvironmentVariables {
  const validateConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true });

  const errors = validateSync(validateConfig, { skipMissingProperties: true });

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return validateConfig;
}
