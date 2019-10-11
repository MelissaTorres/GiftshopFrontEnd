import { Product } from './product.model';

export interface Category {
    id: string;
    categoryName: string;
    products: Product[];
  }
  