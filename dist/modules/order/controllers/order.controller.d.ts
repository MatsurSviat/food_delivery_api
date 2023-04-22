import type { IAuthData } from "@models/interfaces";
import { CreatedOrderDto } from "../models/createOrder.dto";
import { OrderService } from "../services";
export declare class OrderController {
    private readonly _orderService;
    constructor(_orderService: OrderService);
    createOrder(body: CreatedOrderDto, user: IAuthData): Promise<import("../../../db/entities").Order>;
}
