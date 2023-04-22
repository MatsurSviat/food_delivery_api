import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
export declare const AUTH_STRATEGIES: (typeof JwtStrategy | typeof LocalStrategy)[];
