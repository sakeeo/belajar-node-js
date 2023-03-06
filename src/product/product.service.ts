import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';

@Injectable()
export class ProductService {
    constructor(private prisma:PrismaService){}
    getall(){
        return 'get all'
    }
    
    getbyid(){
        return 'get by id'
    }

    create(dto:ProductDto){
        return 'this is create'
    }
}