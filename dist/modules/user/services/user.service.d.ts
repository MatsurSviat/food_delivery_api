import { User } from "@db/entities";
import type { IRegister } from "@modules/auth/models";
import type { Repository } from "typeorm";
import { SelfResponse } from "../models";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(body: IRegister): Promise<User>;
    self(userId: string): Promise<SelfResponse>;
    getAllFavoriteMeals(userId: string): Promise<User["favoriteMeals"]>;
    addToFavorite(userId: string, mealId: string): Promise<{
        message: string;
    }>;
    deleteFromFavorite(userId: string, mealId: string): Promise<{
        message: string;
    }>;
}
