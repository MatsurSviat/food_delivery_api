import type { DeepPartial } from "typeorm";

import { Meal, User } from "@entities";

import { AbstractLoader, IRelationsOptions } from "../abstract-loader";
import { USERS_FIXTURE_DATA } from "../data/users-fixture-data";

export class UsersLoader extends AbstractLoader<User, never> {
  data = USERS_FIXTURE_DATA;
  entity = User;
  relations: IRelationsOptions<DeepPartial<User>, never>[] = [];
}
