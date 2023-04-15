import { Strategy } from 'passport-local';
import type { UserWithoutPassword } from '@models/types';
import { AuthService } from '../services';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly _authService;
    constructor(_authService: AuthService);
    validate(email: string, password: string): Promise<UserWithoutPassword | null>;
}
export {};
