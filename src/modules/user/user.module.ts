import { User } from "@db/entities";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { USER_CONTROLLERS } from "./controllers";
import { UserService, USER_SERVICES } from "./services";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: USER_CONTROLLERS,
  providers: USER_SERVICES,
  exports: [UserService],
})
export class UserModule {}
