import { ProductDto } from './dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getall(): string;
    getbyid(): string;
    create(dto: ProductDto): string;
}
