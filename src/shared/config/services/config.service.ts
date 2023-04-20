import type { JwtModuleOptions } from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { ENTITIES } from "@entities";

import type { ISwaggerConfig } from "../models";
import type { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

@Injectable()
export class AppConfigService {
  constructor(private readonly _configService: ConfigService) {}

  // # Application
  get port(): number {
    return this._configService.get<number>("PORT");
  }

  get clientUrl(): string {
    return this._configService.get<string>("APP_CLIENT_URL");
  }

  // # Database
  get databaseConfig(): PostgresConnectionOptions {
    return {
      type: "postgres",
      host: this._configService.get<string>("DB_HOST"),
      port: this._configService.get<number>("DB_PORT"),
      username: this._configService.get<string>("DB_USER"),
      password: this._configService.get<string>("DB_PASSWORD"),
      database: this._configService.get<string>("DB_NAME"),
      logger: "advanced-console",
      logging: "all",
      entities: ENTITIES,
    };
  }

  // # User security

  get jwtConfig(): JwtModuleOptions {
    return {
      secret: this._configService.get<string>("JWT_SECRET"),
      signOptions: {
        expiresIn: this._configService.get<string>("JWT_EXPIRES_IN"),
      },
    };
  }

  get passwordEncoderSalt(): number {
    return this._configService.get<number>("ENCODER_SALT_ROUND");
  }

  // # Swagger
  get swaggerConfig(): ISwaggerConfig {
    return {
      title: this._configService.get<string>("SG_TITLE"),
      description: this._configService.get<string>("SG_DESCRIPTION"),
      path: this._configService.get<string>("SG_PATH"),
    };
  }
}
