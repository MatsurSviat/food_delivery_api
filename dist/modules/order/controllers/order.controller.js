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
exports.OrderController = void 0;
const openapi = require("@nestjs/swagger");
const decorators_1 = require("../../../core/decorators");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createOrder_dto_1 = require("../models/createOrder.dto");
const services_1 = require("../services");
let OrderController = class OrderController {
    constructor(_orderService) {
        this._orderService = _orderService;
    }
    createOrder(body, user) {
        return this._orderService.createOrder(user.id, body.items);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: "Order created" }),
    (0, swagger_1.ApiBody)({ type: createOrder_dto_1.CreatedOrderDto }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../../db/entities/order.entity").Order }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.AuthenticatedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createOrder_dto_1.CreatedOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
OrderController = __decorate([
    (0, decorators_1.ApiController)("Order"),
    (0, common_1.Controller)("orders"),
    __metadata("design:paramtypes", [services_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map