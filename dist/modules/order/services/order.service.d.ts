import { Meal, Order, OrderItem, User } from "@db/entities";
import type { Repository } from "typeorm";
export declare class OrderService {
    private usersRepository;
    private ordersRepository;
    private ordersItemRepository;
    private mealsRepository;
    constructor(usersRepository: Repository<User>, ordersRepository: Repository<Order>, ordersItemRepository: Repository<OrderItem>, mealsRepository: Repository<Meal>);
    createOrder(userId: string, items: {
        mealId: string;
        count: number;
    }[]): Promise<Order>;
}
