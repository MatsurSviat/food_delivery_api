import { UserModule } from "@modules/user/user.module";
import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AppConfigService } from "@shared/config";

import { AUTH_CONTROLLERS } from "./controllers";
import { JwtAuthGuard } from "./guards";
import { AUTH_SERVICES } from "./services";
import { AUTH_STRATEGIES } from "./strategies";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [AppConfigService],
      useFactory: (configService: AppConfigService) => configService.jwtConfig,
    }),
  ],
  controllers: AUTH_CONTROLLERS,
  providers: [
    ...AUTH_SERVICES,
    ...AUTH_STRATEGIES,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
