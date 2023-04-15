import type { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';
import type { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { ConfigService } from '@nestjs/config';
import type { ISwaggerConfig } from '../models';
export declare class AppConfigService {
    private readonly _configService;
    constructor(_configService: ConfigService);
    get port(): number;
    get clientUrl(): string;
    get databaseConfig(): MysqlConnectionOptions;
    get jwtConfig(): JwtModuleOptions;
    get passwordEncoderSalt(): number;
    get swaggerConfig(): ISwaggerConfig;
}
