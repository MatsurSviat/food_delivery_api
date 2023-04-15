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
exports.MealController = void 0;
const openapi = require("@nestjs/swagger");
const decorators_1 = require("../../../core/decorators");
const entities_1 = require("../../../db/entities");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let MealController = class MealController {
    constructor(_mealService) {
        this._mealService = _mealService;
    }
    getAllMeals() {
        return this._mealService.getAllMeals();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all meals" }),
    (0, swagger_1.ApiOkResponse)({ type: [entities_1.Meal] }),
    openapi.ApiResponse({ status: 200, type: [require("../../../db/entities/meal.entity").Meal] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getAllMeals", null);
MealController = __decorate([
    (0, decorators_1.ApiController)("Meal"),
    (0, common_1.Controller)("meals"),
    __metadata("design:paramtypes", [services_1.MealService])
], MealController);
exports.MealController = MealController;
//# sourceMappingURL=meal.controller.js.map