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
exports.PasswordEncoderService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const config_1 = require("../../config");
let PasswordEncoderService = class PasswordEncoderService {
    constructor(_configService) {
        this._configService = _configService;
    }
    encode(password) {
        return (0, bcrypt_1.hash)(password, this._configService.passwordEncoderSalt);
    }
    compare(plainTextPassword, hashedPassword) {
        return (0, bcrypt_1.compare)(plainTextPassword, hashedPassword);
    }
};
PasswordEncoderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.AppConfigService])
], PasswordEncoderService);
exports.PasswordEncoderService = PasswordEncoderService;
//# sourceMappingURL=password-encoder.service.js.map