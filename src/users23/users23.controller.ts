import { Body, Controller, Get, Put } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Users23Dto } from './dto';
import { Users23Service } from './users23.service';

@Controller('users23')
export class Users23Controller {
    constructor(private users23Service:Users23Service){}

    @Get('get')    
        get(){
        return this.users23Service.get();
    }

    @Post('create')
        create(@Body() dto:Users23Dto){
        return this.users23Service.create(dto);
    }

    @Put('update')
        update(@Body() dto:Users23Dto){
        return this.users23Service.update(dto);
    }
}
