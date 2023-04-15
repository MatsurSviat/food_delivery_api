"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENTITIES = exports.OrderItem = exports.Courier = exports.Order = exports.Meal = exports.User = void 0;
const courier_entity_1 = require("./courier.entity");
const meal_entity_1 = require("./meal.entity");
const order_entity_1 = require("./order.entity");
const orderItem_entity_1 = require("./orderItem.entity");
const user_entity_1 = require("./user.entity");
var user_entity_2 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_2.User; } });
var meal_entity_2 = require("./meal.entity");
Object.defineProperty(exports, "Meal", { enumerable: true, get: function () { return meal_entity_2.Meal; } });
var order_entity_2 = require("./order.entity");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return order_entity_2.Order; } });
var courier_entity_2 = require("./courier.entity");
Object.defineProperty(exports, "Courier", { enumerable: true, get: function () { return courier_entity_2.Courier; } });
var orderItem_entity_2 = require("./orderItem.entity");
Object.defineProperty(exports, "OrderItem", { enumerable: true, get: function () { return orderItem_entity_2.OrderItem; } });
exports.ENTITIES = [user_entity_1.User, meal_entity_1.Meal, order_entity_1.Order, courier_entity_1.Courier, orderItem_entity_1.OrderItem];
//# sourceMappingURL=index.js.map