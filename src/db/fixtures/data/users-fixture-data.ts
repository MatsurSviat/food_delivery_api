import type { DeepPartial } from "typeorm";
import { hashSync } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import type { User } from "@entities";
import { configService } from "@db/data-source";
import { join } from "path";

const basePassword1 = hashSync(
  "test-pass1",
  +configService.passwordEncoderSalt
);
const basePassword2 = hashSync(
  "test-pass2",
  +configService.passwordEncoderSalt
);
const basePassword3 = hashSync(
  "test-pass3",
  +configService.passwordEncoderSalt
);

export const FIRST_USER_ID = uuidv4();
export const SECOND_USER_ID = uuidv4();
export const THIRD_USER_ID = uuidv4();

export const USERS_FIXTURE_DATA: DeepPartial<User>[] = [
  {
    id: FIRST_USER_ID,
    userName: "firstUser",
    email: "first@mail.ru",
    password: basePassword1,
    adress: "First City",
    photo: join("user-images", "avatar1.png"),
  },
  {
    id: SECOND_USER_ID,
    userName: "secondUser",
    email: "second@mail.ru",
    password: basePassword2,
    adress: "Second City",
    photo: join("user-images", "avatar2.png"),
  },
  {
    id: THIRD_USER_ID,
    userName: "thirdUser",
    email: "third@mail.ru",
    password: basePassword3,
    adress: "Third City",
    photo: join("user-images", "avatar3.png"),
  },
];
