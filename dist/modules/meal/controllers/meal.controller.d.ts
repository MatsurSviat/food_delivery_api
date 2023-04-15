import { Meal } from "@db/entities";
import { MealService } from "../services";
export declare class MealController {
    private readonly _mealService;
    constructor(_mealService: MealService);
    getAllMeals(): Promise<Meal[]>;
}
