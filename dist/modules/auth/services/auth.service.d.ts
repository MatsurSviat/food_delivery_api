import { JwtService } from "@nestjs/jwt";
import { EntityManager } from "typeorm";
import type { UserWithoutPassword } from "@models/types";
import { User } from "@entities";
import { PasswordEncoderService } from "@shared/password-encoder";
import { type ICredentials, type IRegister } from "../models";
import { UserService } from "@modules/user/services";
export declare class AuthService {
    private readonly _entityManager;
    private readonly _passwordEncoderService;
    private readonly _jwtService;
    private readonly _userService;
    private readonly _logger;
    constructor(_entityManager: EntityManager, _passwordEncoderService: PasswordEncoderService, _jwtService: JwtService, _userService: UserService);
    getAuthenticatedUser(body: ICredentials): Promise<UserWithoutPassword>;
    signIn(user: User): string;
    private _validateCredentials;
    signUp(body: IRegister): Promise<void>;
    signOut(body: IRegister): Promise<void>;
    private _verifyPassword;
}
