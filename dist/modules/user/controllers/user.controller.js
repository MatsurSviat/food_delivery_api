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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../../core/decorators");
const services_1 = require("../services");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(_userService) {
        this._userService = _userService;
    }
    self(user) {
        return this._userService.self(user.id);
    }
    getFavoriteMeals(user) {
        return this._userService.getAllFavoriteMeals(user.id);
    }
    addToFavoriteMeal(user, mealId) {
        return this._userService.addToFavorite(user.id, mealId);
    }
    deleteMealFromFavorite(user, mealId) {
        return this._userService.deleteFromFavorite(user.id, mealId);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)("self"),
    openapi.ApiResponse({ status: 200, type: require("../models/selfResponse").SelfResponse }),
    __param(0, (0, decorators_1.AuthenticatedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "self", null);
__decorate([
    (0, common_1.Get)("favorite-meals"),
    openapi.ApiResponse({ status: 200, type: [require("../../../db/entities/meal.entity").Meal] }),
    __param(0, (0, decorators_1.AuthenticatedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getFavoriteMeals", null);
__decorate([
    (0, common_1.Put)(":mealId/favorite"),
    (0, swagger_1.ApiParam)({
        name: "mealId",
        required: true,
        description: "Should be an id of a meal that exists in the database",
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "added a meal to favorite",
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, decorators_1.AuthenticatedUser)()),
    __param(1, (0, common_1.Param)("mealId", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addToFavoriteMeal", null);
__decorate([
    (0, common_1.Delete)(":mealId/favorite"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, decorators_1.AuthenticatedUser)()),
    __param(1, (0, common_1.Param)("mealId", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteMealFromFavorite", null);
UserController = __decorate([
    (0, decorators_1.ApiController)("User"),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [services_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map