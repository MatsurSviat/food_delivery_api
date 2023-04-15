"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const _entities_1 = require("../db/entities/index");
const config_1 = require("./config");
const multer_1 = require("./multer");
const password_encoder_1 = require("./password-encoder");
let SharedModule = SharedModule_1 = class SharedModule {
    static share() {
        const sharedModules = [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => configService.databaseConfig,
                inject: [config_1.AppConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature(_entities_1.ENTITIES),
            schedule_1.ScheduleModule.forRoot(),
            config_1.AppConfigModule.forRoot(),
            password_encoder_1.PasswordEncoderModule.forRoot(),
            multer_1.AppMulterModule.forRoot(),
        ];
        return {
            module: SharedModule_1,
            imports: sharedModules,
            exports: sharedModules,
        };
    }
};
SharedModule = SharedModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map