import { Meal } from "./meal.entity";
import { Order } from "./order.entity";
export declare class User {
    id: string;
    userName: string;
    photo: string;
    email: string;
    password: string;
    adress: string;
    orders: Order[];
    favoriteMeals: Meal[];
}
