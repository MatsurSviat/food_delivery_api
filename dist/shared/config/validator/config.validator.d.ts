import type { ConfigFactory } from '@nestjs/config';
import { EnvironmentVariables } from './environment-variables';
export declare function validate(config: ReturnType<ConfigFactory>): EnvironmentVariables;
