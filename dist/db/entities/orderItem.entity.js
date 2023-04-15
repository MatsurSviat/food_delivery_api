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
exports.OrderItem = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const meal_entity_1 = require("./meal.entity");
const order_entity_1 = require("./order.entity");
let OrderItem = class OrderItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, meal: { required: true, type: () => require("./meal.entity").Meal }, order: { required: true, type: () => require("./order.entity").Order }, count: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], OrderItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => meal_entity_1.Meal),
    __metadata("design:type", meal_entity_1.Meal)
], OrderItem.prototype, "meal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.items),
    __metadata("design:type", order_entity_1.Order)
], OrderItem.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "count", void 0);
OrderItem = __decorate([
    (0, typeorm_1.Entity)("order_items")
], OrderItem);
exports.OrderItem = OrderItem;
//# sourceMappingURL=orderItem.entity.js.map