import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

export const AUTH_STRATEGIES = [JwtStrategy, LocalStrategy, GoogleStrategy];
