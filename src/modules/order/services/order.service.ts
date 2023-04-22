import { Meal, Order, OrderItem, User } from "@db/entities";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private ordersItemRepository: Repository<OrderItem>,
    @InjectRepository(Meal)
    private mealsRepository: Repository<Meal>
  ) {}

  async createOrder(
    userId: string,
    items: { mealId: string; count: number }[]
  ): Promise<Order> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const order = new Order();
    order.customer = user;
    order.completed = false;

    const createdOrder = await this.ordersRepository.save(order);

    for (const item of items) {
      const meal = await this.mealsRepository.findOne({
        where: { id: item.mealId },
      });

      if (!meal) {
        throw new NotFoundException("Meal not found");
      }

      const orderItem = new OrderItem();
      orderItem.meal = meal;
      orderItem.order = createdOrder;
      orderItem.count = item.count;

      await this.ordersItemRepository.save(orderItem);

    }

    return createdOrder;
  }
}
