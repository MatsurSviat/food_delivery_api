import { CouriersLoader } from "./courier-loader";
import { MealsLoader } from "./meal-loader";
import { UsersLoader } from "./users-loader";

// тут важен порядок
export const LOADERS = [UsersLoader, MealsLoader, CouriersLoader];
