import { Product } from './product.model';

export interface AddCategory {
    categoryName: string;
    products: Product[];
}