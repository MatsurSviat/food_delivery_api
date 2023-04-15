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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_2 = require("typeorm");
const _entities_1 = require("../../../db/entities/index");
const enums_1 = require("../../../models/enums");
const password_encoder_1 = require("../../../shared/password-encoder");
const models_1 = require("../models");
const services_1 = require("../../user/services");
let AuthService = AuthService_1 = class AuthService {
    constructor(_entityManager, _passwordEncoderService, _jwtService, _userService) {
        this._entityManager = _entityManager;
        this._passwordEncoderService = _passwordEncoderService;
        this._jwtService = _jwtService;
        this._userService = _userService;
        this._logger = new common_1.Logger(AuthService_1.name);
    }
    async getAuthenticatedUser(body) {
        await this._validateCredentials(body);
        try {
            const user = await this._entityManager
                .getRepository(_entities_1.User)
                .createQueryBuilder()
                .select("*")
                .where("email = :email", { email: body.email })
                .getRawOne();
            const { password } = user, authenticatedUser = __rest(user, ["password"]);
            await this._verifyPassword(password, body.password);
            return authenticatedUser;
        }
        catch (error) {
            throw new common_1.BadRequestException("Wrong credentials provided");
        }
    }
    signIn(user) {
        const payload = { id: user.id, photo: user.photo, userName: user.userName, email: user.email };
        return this._jwtService.sign(payload);
    }
    async _validateCredentials(body) {
        const errors = await (0, class_validator_1.validate)((0, class_transformer_1.plainToInstance)(models_1.CredentialsDto, body));
        if (errors.length) {
            throw new common_1.BadRequestException(errors.toString());
        }
    }
    async signUp(body) {
        try {
            await this._userService.createUser(body);
        }
        catch (error) {
            this._logger.verbose("Troubles with User");
            if ((error === null || error === void 0 ? void 0 : error.code) === enums_1.MysqlErrorCode.DuplicateEntry) {
                throw new common_1.BadRequestException("User with that email already exists");
            }
            throw new common_1.InternalServerErrorException("Something went wrong");
        }
    }
    async signOut(body) {
        const { userName } = body, userData = __rest(body, ["userName"]);
        try {
            await this._entityManager.transaction(async (entityManager) => {
                const profile = await entityManager.save({ userName });
                await entityManager.save(_entities_1.User, Object.assign(Object.assign({}, userData), { profile }));
            });
        }
        catch (error) {
            this._logger.verbose("Rollback transaction");
            if ((error === null || error === void 0 ? void 0 : error.code) === enums_1.MysqlErrorCode.DuplicateEntry) {
                throw new common_1.BadRequestException("User with that email already exists");
            }
            throw new common_1.InternalServerErrorException("Something went wrong");
        }
    }
    async _verifyPassword(plainTextPassword, hashedPassword) {
        const isCurrentPassword = await this._passwordEncoderService.compare(plainTextPassword, hashedPassword);
        if (isCurrentPassword) {
            throw new common_1.BadRequestException("Wrong credentials provided");
        }
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        password_encoder_1.PasswordEncoderService,
        jwt_1.JwtService,
        services_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map