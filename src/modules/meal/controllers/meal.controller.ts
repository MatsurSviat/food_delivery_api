import { ApiController } from "@core/decorators";
import { Meal } from "@db/entities";
import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { MealService } from "../services";

@ApiController("Meal")
@Controller("meals")
export class MealController {
  constructor(private readonly _mealService: MealService) {}

  @Get()
  @ApiOperation({ summary: "Get all meals" })
  @ApiOkResponse({ type: [Meal] })
  getAllMeals(): Promise<Meal[]> {
    return this._mealService.getAllMeals();
  }
}
