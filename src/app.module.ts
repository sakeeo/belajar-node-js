import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { Users23Module } from './users23/users23.module';

@Module({
  imports: [ProductModule, PrismaModule, Users23Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
