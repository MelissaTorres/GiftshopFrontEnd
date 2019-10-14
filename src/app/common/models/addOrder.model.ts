import { OrderDetail } from './orderDetail.model';

export interface AddOrder {
    userId: string;
    orderDate: Date;
    orderDetails: OrderDetail[];
}