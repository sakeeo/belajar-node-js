import { IsString,IsNotEmpty } from "class-validator";


export class ProductDto{
    @IsString()
    @IsNotEmpty()
    idsku:string;

    @IsString()
    @IsNotEmpty()
    nama:string;
}