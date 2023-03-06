import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Users23Service } from './users23.service';
import { Users23Controller } from './users23.controller';

@Module({
  imports:[PrismaModule],
  providers: [Users23Service],
  controllers: [Users23Controller]
})
export class Users23Module {}
