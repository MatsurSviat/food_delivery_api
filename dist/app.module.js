"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const filters_1 = require("./core/filters");
const middlewares_1 = require("./core/middlewares");
const shared_module_1 = require("./shared/shared.module");
const modules_1 = require("./modules");
const meal_service_1 = require("./modules/meal/services/meal.service");
const meal_module_1 = require("./modules/meal/meal.module");
const order_module_1 = require("./modules/order/order.module");
require("./modules/order/controllers/order.controller");
const order_service_1 = require("./modules/order/services/order.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middlewares_1.RequestLoggerMiddleware).forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule.share(), ...modules_1.APP_MODULES, meal_module_1.MealModule, order_module_1.OrderModule],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: filters_1.AllExceptionFilter,
            },
            meal_service_1.MealService,
            order_service_1.OrderService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map