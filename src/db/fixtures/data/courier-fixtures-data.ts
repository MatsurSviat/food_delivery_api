import type { Courier } from "@db/entities";
import { join } from "path";
import type { DeepPartial } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export const FIRST_COURIER_ID = uuidv4();
export const SECOND_COURIER_ID = uuidv4();
export const THIRD_COURIER_ID = uuidv4();

export const COURIERS_FIXTURE_DATA: DeepPartial<Courier>[] = [
  {
    id: FIRST_COURIER_ID,
    identityNumber: 11111,
    name: "Nice Guy",
    photo: join("courier-images", "avatar1.png"),
  },
  {
    id: SECOND_COURIER_ID,
    identityNumber: 22222,
    name: "Good Guy",
    photo: join("courier-images", "avatar2.png"),
  },
  {
    id: THIRD_COURIER_ID,
    identityNumber: 33333,
    name: "Normal Guy",
    photo: join("courier-images", "avatar3.png"),
  },
];
