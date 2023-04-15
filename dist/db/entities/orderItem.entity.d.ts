import { Meal } from "./meal.entity";
import { Order } from "./order.entity";
export declare class OrderItem {
    id: string;
    meal: Meal;
    order: Order;
    count: number;
}
