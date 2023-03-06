import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getall(): string;
    getbyid(): string;
    create(dto: ProductDto): string;
}
