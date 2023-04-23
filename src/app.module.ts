import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";

import { AllExceptionFilter } from "@core/filters";
import { RequestLoggerMiddleware } from "@core/middlewares";
import { SharedModule } from "@shared/shared.module";

import { APP_MODULES } from "./modules";
import { MealService } from "./modules/meal/services/meal.service";
import { MealModule } from "./modules/meal/meal.module";
import { OrderModule } from "./modules/order/order.module";
import { OrderService } from "./modules/order/services/order.service";
import { GoogleStrategy } from "@modules/auth/strategies/google.strategy";

@Module({
  imports: [SharedModule.share(), ...APP_MODULES, MealModule, OrderModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    MealService,
    OrderService,
    GoogleStrategy,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }
}
