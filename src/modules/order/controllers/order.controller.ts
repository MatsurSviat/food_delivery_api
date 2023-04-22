import { ApiController, AuthenticatedUser } from "@core/decorators";
import type { IAuthData } from "@models/interfaces";
import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse } from "@nestjs/swagger";
import { CreatedOrderDto } from "../models/createOrder.dto";
import { OrderService } from "../services";

@ApiController("Order")
@Controller("orders")
export class OrderController {
  constructor(private readonly _orderService: OrderService) {}

  @ApiCreatedResponse({ description: "Order created" })
  @ApiBody({ type: CreatedOrderDto })
  @Post()
  createOrder(
    @Body()
    body: CreatedOrderDto,
    @AuthenticatedUser() user: IAuthData
  ) {
    return this._orderService.createOrder(user.id, body.items);
  }
}
