import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("meals")
export class Meal {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  img: string;

  @Column({ type: "varchar", nullable: true })
  title: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ type: "int", nullable: true })
  price: number;

  @Column({ type: "varchar", nullable: true })
  taste: string;

  @Column({ type: "varchar", nullable: true })
  category: string;

  @Column({ type: "int", nullable: true })
  cookTime: number;

  @Column({ type: "int", nullable: true })
  rating: number;
}
