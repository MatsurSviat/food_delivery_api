"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppMulterModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMulterModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_service_1 = require("./services/multer.service");
let AppMulterModule = AppMulterModule_1 = class AppMulterModule {
    static forRoot() {
        const modules = [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.memoryStorage)(),
                preservePath: true,
            }),
        ];
        const providers = [multer_service_1.MulterService];
        return {
            module: AppMulterModule_1,
            imports: modules,
            providers,
            exports: [...modules, ...providers],
        };
    }
};
AppMulterModule = AppMulterModule_1 = __decorate([
    (0, common_1.Module)({})
], AppMulterModule);
exports.AppMulterModule = AppMulterModule;
//# sourceMappingURL=multer.module.js.map