"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PasswordEncoderModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordEncoderModule = void 0;
const common_1 = require("@nestjs/common");
const password_encoder_service_1 = require("./services/password-encoder.service");
let PasswordEncoderModule = PasswordEncoderModule_1 = class PasswordEncoderModule {
    static forRoot() {
        const providers = [password_encoder_service_1.PasswordEncoderService];
        return {
            module: PasswordEncoderModule_1,
            providers,
            exports: providers,
        };
    }
};
PasswordEncoderModule = PasswordEncoderModule_1 = __decorate([
    (0, common_1.Module)({})
], PasswordEncoderModule);
exports.PasswordEncoderModule = PasswordEncoderModule;
//# sourceMappingURL=password-encoder.module.js.map