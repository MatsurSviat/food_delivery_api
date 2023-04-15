import type { User } from "@entities";
export interface IAuthData extends Pick<User, "id" | "email"> {
    photo: string;
}
