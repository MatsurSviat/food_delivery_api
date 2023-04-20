"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const _entities_1 = require("../../../db/entities/index");
let AppConfigService = class AppConfigService {
    constructor(_configService) {
        this._configService = _configService;
    }
    get port() {
        return this._configService.get("PORT");
    }
    get clientUrl() {
        return this._configService.get("APP_CLIENT_URL");
    }
    get databaseConfig() {
        return {
            type: "postgres",
            host: this._configService.get("DB_HOST"),
            port: this._configService.get("DB_PORT"),
            username: this._configService.get("DB_USER"),
            password: this._configService.get("DB_PASSWORD"),
            database: this._configService.get("DB_NAME"),
            logger: "advanced-console",
            logging: "all",
            entities: _entities_1.ENTITIES,
        };
    }
    get jwtConfig() {
        return {
            secret: this._configService.get("JWT_SECRET"),
            signOptions: {
                expiresIn: this._configService.get("JWT_EXPIRES_IN"),
            },
        };
    }
    get passwordEncoderSalt() {
        return this._configService.get("ENCODER_SALT_ROUND");
    }
    get swaggerConfig() {
        return {
            title: this._configService.get("SG_TITLE"),
            description: this._configService.get("SG_DESCRIPTION"),
            path: this._configService.get("SG_PATH"),
        };
    }
};
AppConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppConfigService);
exports.AppConfigService = AppConfigService;
//# sourceMappingURL=config.service.js.map