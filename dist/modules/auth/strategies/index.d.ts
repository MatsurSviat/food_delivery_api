import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
export declare const AUTH_STRATEGIES: (typeof GoogleStrategy | typeof JwtStrategy | typeof LocalStrategy)[];
