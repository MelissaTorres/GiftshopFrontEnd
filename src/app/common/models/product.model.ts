import { Category } from './category.model';

export interface Product {
    id: string;
    productName: string;
    description: string;
    characteristics: string;
    price: number;
    //category: Category;
    //categoryId: string;
  }
  