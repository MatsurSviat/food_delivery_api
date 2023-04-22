import { User } from "@db/entities";
import type { IRegister } from "@modules/auth/models";
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";
import { SelfResponse } from "../models";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  createUser(body: IRegister): Promise<User> {
    return this.usersRepository.save(body);
  }

  async self(userId: string): Promise<SelfResponse> {
    const rawResult = await this.usersRepository
      .createQueryBuilder("user")
      .select(["user", `array_agg(favoriteMeals.id) AS "favoriteMeals"`])
      .leftJoin("user.favoriteMeals", "favoriteMeals")
      .where("user.id = :userId", { userId })
      .groupBy("user.id")
      .getRawOne();

    return new SelfResponse(rawResult);
  }

  async getAllFavoriteMeals(userId: string): Promise<User["favoriteMeals"]> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ["favoriteMeals"],
    });
    return user.favoriteMeals;
  }

  async addToFavorite(userId: string, mealId: string) {
    const userFromDB = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ["favoriteMeals"],
    });

    if (!userFromDB) {
      throw new NotFoundException("User not found");
    }

    const isFavorite = userFromDB.favoriteMeals.find(
      (favoriteMeal) => favoriteMeal.id === mealId
    );

    if (isFavorite) {
      throw new BadRequestException("The meal is already favorite");
    }

    await this.usersRepository.save({
      ...userFromDB,
      favoriteMeals: [...userFromDB.favoriteMeals, { id: mealId }],
    });
    return {
      message: "ok",
    };
  }

  async deleteFromFavorite(userId: string, mealId: string) {
    const userFromDB = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ["favoriteMeals"],
    });

    if (!userFromDB) {
      throw new NotFoundException("User not found");
    }

    userFromDB.favoriteMeals = userFromDB.favoriteMeals.filter((meal) => {
      return meal.id !== mealId;
    });

    await this.usersRepository.save(userFromDB);
    return {
      message: "ok",
    };
  }


}
