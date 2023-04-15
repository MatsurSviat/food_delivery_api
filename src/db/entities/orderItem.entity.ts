import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Meal } from "./meal.entity";
import { Order } from "./order.entity";

@Entity("order_items")
export class OrderItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Meal)
  meal: Meal;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @Column({ type: "int" })
  count: number;
}
