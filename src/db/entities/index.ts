import { Courier } from "./courier.entity";
import { Meal } from "./meal.entity";
import { Order } from "./order.entity";
import { OrderItem } from "./orderItem.entity";
import { User } from "./user.entity";

export { User } from "./user.entity";
export { Meal } from "./meal.entity";
export { Order } from "./order.entity";
export { Courier } from "./courier.entity";
export { OrderItem } from "./orderItem.entity";

export const ENTITIES = [User, Meal, Order, Courier, OrderItem];
