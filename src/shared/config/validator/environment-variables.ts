import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

import { Environment } from '@models/enums';

export class EnvironmentVariables {
  @IsNotEmpty()
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNotEmpty()
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  APP_CLIENT_URL: string;

  @IsNotEmpty()
  @IsString()
  DB_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  DB_PORT: number;

  @IsNotEmpty()
  @IsString()
  DB_USER: string;

  @IsNotEmpty()
  @IsString()
  DB_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  DB_NAME: string;

  @IsNotEmpty()
  @IsString()
  JWT_EXPIRES_IN: string;

  @IsNotEmpty()
  @IsString()
  JWT_SECRET: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  ENCODER_SALT_ROUND: number;

  @IsNotEmpty()
  @IsString()
  SG_TITLE: string;

  @IsNotEmpty()
  @IsString()
  SG_PATH: string;

  @IsNotEmpty()
  @IsString()
  SG_DESCRIPTION: string;
}
