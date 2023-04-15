import { Courier } from "@entities";
import type { DeepPartial } from "typeorm";

import { AbstractLoader, IRelationsOptions } from "../abstract-loader";
import { COURIERS_FIXTURE_DATA } from "../data/courier-fixtures-data";

export class CouriersLoader extends AbstractLoader<Courier, never> {
  data = COURIERS_FIXTURE_DATA;
  entity = Courier;
  relations: IRelationsOptions<DeepPartial<Courier>, never>[] = [];
}
