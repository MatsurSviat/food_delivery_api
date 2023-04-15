import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("couriers")
export class Courier {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  identityNumber: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", nullable: true })
  photo: string;
}
