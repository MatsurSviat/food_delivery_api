import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Courier } from "./courier.entity";
import { OrderItem } from "./orderItem.entity";
import { User } from "./user.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => OrderItem, (OrderItem) => OrderItem.order)
  items: OrderItem[];

  @ManyToOne(() => User, (user) => user.orders)
  customer: User;

  @ManyToOne(() => Courier)
  courier: Courier;

  @Column({ type: "boolean" })
  completed: boolean;
}
