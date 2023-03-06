import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources:{
                db:{
                    url:'mysql://sakeeo:GLg[LT1[JEkt[M9N@localhost:3306/sakeeo_db_prisma?schema=public'
                },
            }
        })
    }
}
