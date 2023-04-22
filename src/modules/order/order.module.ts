import { Order } from '@db/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORDER_CONTROLLERS } from './controllers';
import { OrderService, ORDER_SERVICES } from './services';

@Module({
    imports: [TypeOrmModule.forFeature([Order])],
    controllers: ORDER_CONTROLLERS,
    providers: ORDER_SERVICES,
    exports: [OrderService],
  })
export class OrderModule {}
