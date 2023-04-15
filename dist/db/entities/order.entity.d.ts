import { Courier } from "./courier.entity";
import { OrderItem } from "./orderItem.entity";
import { User } from "./user.entity";
export declare class Order {
    id: string;
    items: OrderItem[];
    customer: User;
    courier: Courier;
    deliveryCost: number;
    deliveryTime: number;
    completed: boolean;
}
