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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../core/decorators");
const _entities_1 = require("../../../db/entities/index");
const password_encoder_1 = require("../../../shared/password-encoder");
const guards_1 = require("../guards");
const models_1 = require("../models");
const services_1 = require("../services");
let AuthController = class AuthController {
    constructor(_authService) {
        this._authService = _authService;
    }
    async signIn(user) {
        return this._authService.signIn(user);
    }
    async signOut(body) {
        return this._authService.signOut(body);
    }
    async signUp(body) {
        return this._authService.signUp(body);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ type: models_1.CredentialsDto }),
    (0, decorators_1.Public)(),
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, common_1.Post)("sign-in"),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, decorators_1.AuthenticatedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_entities_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: "User registered" }),
    (0, decorators_1.Public)(),
    (0, common_1.UsePipes)(password_encoder_1.EncodePasswordPipe),
    (0, common_1.Post)("sign-out"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: "User registered" }),
    (0, decorators_1.Public)(),
    (0, common_1.UsePipes)(password_encoder_1.EncodePasswordPipe),
    (0, common_1.Post)("sign-up"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [services_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map