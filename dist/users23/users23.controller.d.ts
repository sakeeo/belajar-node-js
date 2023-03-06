import { Users23Dto } from './dto';
import { Users23Service } from './users23.service';
export declare class Users23Controller {
    private users23Service;
    constructor(users23Service: Users23Service);
    get(): Promise<import(".prisma/client").users23[]>;
    create(dto: Users23Dto): Promise<import(".prisma/client").users23>;
    update(dto: Users23Dto): Promise<import(".prisma/client").users23>;
}
