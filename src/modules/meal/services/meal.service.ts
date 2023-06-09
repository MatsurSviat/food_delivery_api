import { Meal, User } from "@db/entities";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal)
    private mealsRepository: Repository<Meal>
  ) {}

  async getAllMeals(): Promise<Meal[]> {
    return this.mealsRepository.find();
  }
}
