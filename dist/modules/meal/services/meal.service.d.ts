import { Meal } from "@db/entities";
import type { Repository } from "typeorm";
export declare class MealService {
    private mealsRepository;
    constructor(mealsRepository: Repository<Meal>);
    getAllMeals(): Promise<Meal[]>;
}
