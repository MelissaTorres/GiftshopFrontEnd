import { Order } from './order.model';
import { Product } from './product.model';

export interface AddOrderDetail {
    order: Order;
    orderId: string;
    product: Product;
    productId: string;
    user: string;
    quantity: number;
    total: number;
}