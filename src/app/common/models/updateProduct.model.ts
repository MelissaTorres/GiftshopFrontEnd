import { Category } from './category.model';

export interface UpdateProduct {
    productName: string;
    description: string;
    characteristics: string;
    price: number;
    category: Category;
    categoryId: string;
}