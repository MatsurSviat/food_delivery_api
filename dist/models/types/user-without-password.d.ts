import type { User } from '@entities';
export type UserWithoutPassword = Omit<User, 'password'>;
