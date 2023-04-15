import { User } from "@db/entities";
import type { IRegister } from "@modules/auth/models";
import type { Repository } from "typeorm";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(body: IRegister): Promise<User>;
    getUserByEmail(email: User["email"]): Promise<User>;
}
