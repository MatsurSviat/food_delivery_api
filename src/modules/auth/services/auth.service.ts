import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectEntityManager } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { EntityManager } from "typeorm";

import type { ITokenPayload } from "@models/interfaces";
import type { UserWithoutPassword } from "@models/types";
import { User } from "@entities";
import { MysqlErrorCode } from "@models/enums";
import { PasswordEncoderService } from "@shared/password-encoder";

import { CredentialsDto, type ICredentials, type IRegister } from "../models";
import { UserService } from "@modules/user/services";

@Injectable()
export class AuthService {
  private readonly _logger: Logger = new Logger(AuthService.name);

  constructor(
    @InjectEntityManager()
    private readonly _entityManager: EntityManager,
    private readonly _passwordEncoderService: PasswordEncoderService,
    private readonly _jwtService: JwtService,
    private readonly _userService: UserService
  ) {}

  async getAuthenticatedUser(body: ICredentials): Promise<UserWithoutPassword> {
    await this._validateCredentials(body);

    try {
      const user = await this._entityManager
        .getRepository(User)
        .createQueryBuilder()
        .select("*")
        .where("email = :email", { email: body.email })
        .getRawOne<User>();

      const { password, ...authenticatedUser } = user;

      await this._verifyPassword(password, body.password);

      return authenticatedUser;
    } catch (error) {
      throw new BadRequestException("Wrong credentials provided");
    }
  }

  signIn(user: User): string {
    const payload: ITokenPayload = { id: user.id, photo: user.photo, userName: user.userName, email: user.email };

    return this._jwtService.sign(payload);
  }

  private async _validateCredentials(body: ICredentials): Promise<void> {
    const errors = await validate(plainToInstance(CredentialsDto, body));

    if (errors.length) {
      throw new BadRequestException(errors.toString());
    }
  }

  async signUp(body: IRegister): Promise<void> {
    try {
      await this._userService.createUser(body);
    } catch (error) {
      this._logger.verbose("Troubles with User");

      if (error?.code === MysqlErrorCode.DuplicateEntry) {
        throw new BadRequestException("User with that email already exists");
      }

      throw new InternalServerErrorException("Something went wrong");
    }
  }

  async signOut(body: IRegister): Promise<void> {
    const { userName, ...userData } = body;

    try {
      await this._entityManager.transaction(
        async (entityManager: EntityManager) => {
          const profile = await entityManager.save({ userName });

          await entityManager.save(User, { ...userData, profile });
        }
      );
    } catch (error) {
      this._logger.verbose("Rollback transaction");

      if (error?.code === MysqlErrorCode.DuplicateEntry) {
        throw new BadRequestException("User with that email already exists");
      }

      throw new InternalServerErrorException("Something went wrong");
    }
  }

  private async _verifyPassword(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<void> {
    const isCurrentPassword = await this._passwordEncoderService.compare(
      plainTextPassword,
      hashedPassword
    );

    if (isCurrentPassword) {
      throw new BadRequestException("Wrong credentials provided");
    }
  }
}
