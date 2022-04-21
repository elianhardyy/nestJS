import { DataFactory, Seeder } from "nestjs-seeder";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";

export class ProductSeeder implements Seeder{
    constructor(@InjectRepository(Product) private readonly productRepo : Repository<Product>){}
    
    drop(): Promise<any> {
        return this.productRepo.delete({})
    }
    seed(): Promise<any> {
        const products = DataFactory.createForClass(Product).generate(50)
        return this.productRepo.insert(products);
    }
}