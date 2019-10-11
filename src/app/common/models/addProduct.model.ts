import { Category } from './category.model';

export interface AddProduct {
    productName: string;
    description: string;
    characteristics: string;
    price: number;
    category: Category;
    categoryId: string;
}