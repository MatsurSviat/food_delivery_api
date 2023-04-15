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
exports.Order = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const courier_entity_1 = require("./courier.entity");
const orderItem_entity_1 = require("./orderItem.entity");
const user_entity_1 = require("./user.entity");
let Order = class Order {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, items: { required: true, type: () => [require("./orderItem.entity").OrderItem] }, customer: { required: true, type: () => require("./user.entity").User }, courier: { required: true, type: () => require("./courier.entity").Courier }, deliveryCost: { required: true, type: () => Number }, deliveryTime: { required: true, type: () => Number }, completed: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderItem_entity_1.OrderItem, (OrderItem) => OrderItem.order),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.orders),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courier_entity_1.Courier),
    __metadata("design:type", courier_entity_1.Courier)
], Order.prototype, "courier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Order.prototype, "deliveryCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Order.prototype, "deliveryTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], Order.prototype, "completed", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)("orders")
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map