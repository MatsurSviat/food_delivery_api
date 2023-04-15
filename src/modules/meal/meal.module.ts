import { Meal } from "@db/entities";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MEAL_CONTROLLERS } from "./controllers";
import { MealService, MEAL_SERVICES } from "./services";

@Module({
  imports: [TypeOrmModule.forFeature([Meal])],
  controllers: MEAL_CONTROLLERS,
  providers: MEAL_SERVICES,
  exports: [MealService],
})
export class MealModule {}
