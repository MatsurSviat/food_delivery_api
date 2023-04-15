import { Meal } from "@entities";
import type { DeepPartial } from "typeorm";

import { AbstractLoader, IRelationsOptions } from "../abstract-loader";
import { MEALS_FIXTURE_DATA } from "../data/meal-fixture-data";

export class MealsLoader extends AbstractLoader<Meal, never> {
  data = MEALS_FIXTURE_DATA;
  entity = Meal;
  relations: IRelationsOptions<DeepPartial<Meal>, never>[] = [];
}
