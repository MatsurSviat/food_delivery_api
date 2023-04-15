import { User } from "@db/entities";
import type { IRegister } from "@modules/auth/models";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  createUser(body: IRegister): Promise<User> {
    return this.usersRepository.save(body);
  }

  getUserByEmail(email: User["email"]): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
}
