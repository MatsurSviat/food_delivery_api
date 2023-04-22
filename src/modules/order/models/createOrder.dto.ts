import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from "class-validator";

export interface IItems {
  mealId: string;
  count: number;
}

export interface ICreatedOrder {
  items: IItems[];
}

export class CreatedOrderDto implements ICreatedOrder {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    example: [{ mealId: "f3e6e822-dd4f-4c1c-b0ef-7d3d261864e3", count: 1 }],
  })
  items: IItems[];
}
