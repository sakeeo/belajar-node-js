import { PrismaService } from 'src/prisma/prisma.service';
import { Users23Dto } from './dto';
export declare class Users23Service {
    private prisma;
    constructor(prisma: PrismaService);
    get(): Promise<import(".prisma/client").users23[]>;
    create(dto: Users23Dto): Promise<import(".prisma/client").users23>;
    update(dto: Users23Dto): Promise<import(".prisma/client").users23>;
}
