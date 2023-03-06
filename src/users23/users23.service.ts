import {  Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users23Dto } from './dto';

@Injectable()
export class Users23Service {
    constructor(private prisma:PrismaService){}

    async get() {
        const data = await this.prisma.users23.findMany()
        return data;
    }
    
    async create(dto:Users23Dto){
        const hash = await argon.hash(dto.password);
        const myuuid: string = uuidv4();
        try {
            const user = await this.prisma.users23.create({
                data: {
                  uuid:myuuid,
                  username: dto.username,
                  password:hash,
                  idpegawai: Number(dto.idpegawai),
                  level: Number(dto.level),
                },
              })
            delete user.password
            return user;
        } catch (error) {
            throw error
        }
       
    }

    async update(dto:Users23Dto){
    

        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.users23.update({
                where: { iduser: Number(dto.iduser) },
                data: { 
                    username: dto.username,
                    password:hash,
                    idpegawai: Number(dto.idpegawai),
                    level: Number(dto.level),
                 },
              })
            delete user.password
            return user;
        } catch (error) {
            //throw error
            console.log(error)
        }


    }
}
