import type { IAuthData } from "@models/interfaces";
import type { SelfResponse } from "../models";
import { UserService } from "../services";
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    self(user: IAuthData): Promise<SelfResponse>;
    getFavoriteMeals(user: IAuthData): Promise<import("../../../db/entities").Meal[]>;
    addToFavoriteMeal(user: IAuthData, mealId: string): Promise<{
        message: string;
    }>;
    deleteMealFromFavorite(user: IAuthData, mealId: string): Promise<{
        message: string;
    }>;
}
