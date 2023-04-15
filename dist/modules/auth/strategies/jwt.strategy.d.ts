import { Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { User } from "@entities";
import { AppConfigService } from "@shared/config";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly _userRepository;
    constructor(_userRepository: Repository<User>, configService: AppConfigService);
    validate(payload: any): Promise<any>;
}
export {};
