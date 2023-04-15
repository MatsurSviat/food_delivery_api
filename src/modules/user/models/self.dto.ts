import type { IAuthData } from "@models/interfaces";

export class SelfDto implements IAuthData {
  id: string;
  email: string;
  photo: string;
}
