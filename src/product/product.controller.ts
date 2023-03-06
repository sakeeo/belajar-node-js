import { Body, Controller,Get, Post } from '@nestjs/common';
import { ProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Get('getall')    
    getall(){
       return this.productService.getall();
    }
    
    @Get('getbyid')
    getbyid(){
        return this.productService.getbyid();
    }

    @Post('create')
    create(@Body() dto:ProductDto){
        console.log({
            dto,
        });
        return this.productService.create(dto);
    }

}
