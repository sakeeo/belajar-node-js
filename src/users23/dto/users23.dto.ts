import { IsString,IsNotEmpty , IsNumberString, IsEmpty } from "class-validator";


export class Users23Dto{
    @IsEmpty()
    iduser:string;

    @IsEmpty()
    uuid:string;
    
    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsNumberString()
    @IsNotEmpty()
    idpegawai:number;

    @IsNumberString()
    @IsNotEmpty()
    level:number;
}