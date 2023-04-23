import { User } from "@entities";
import { RegisterDto } from "../models";
import { AuthService } from "../services";
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    signIn(user: User): Promise<string>;
    signOut(body: RegisterDto): Promise<void>;
    signUp(body: RegisterDto): Promise<void>;
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: any): Promise<{
        user: any;
        token: string;
    }>;
}
