import type { IAuthData } from '@models/interfaces';
import { SelfDto } from '../models';
import { UserService } from '../services';
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    self(user: IAuthData): SelfDto;
}
