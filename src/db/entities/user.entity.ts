import { ApiHideProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Meal } from "./meal.entity";
import { Order } from "./order.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  userName: string;

  @Column({ type: "varchar", nullable: true })
  photo: string;

  @Column({ type: "varchar", length: 320, unique: true })
  email: string;

  @ApiHideProperty()
  @Column({ type: "varchar", length: 255, select: false })
  password: string;

  @Column({ type: "varchar", nullable: true })
  adress: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @ManyToMany(() => Meal)
  @JoinTable({ name: "user_favorite_meal" })
  favoriteMeals: Meal[];
}
