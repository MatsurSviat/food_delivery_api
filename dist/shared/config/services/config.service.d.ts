import type { JwtModuleOptions } from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";
import { ConfigService } from "@nestjs/config";
import type { ISwaggerConfig } from "../models";
import type { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
export declare class AppConfigService {
    private readonly _configService;
    constructor(_configService: ConfigService);
    get port(): number;
    get clientUrl(): string;
    get databaseConfig(): PostgresConnectionOptions;
    get jwtConfig(): JwtModuleOptions;
    get passwordEncoderSalt(): number;
    get swaggerConfig(): ISwaggerConfig;
}
