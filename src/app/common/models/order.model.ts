import { OrderDetail } from './orderDetail.model';

export interface Order {
    id: string;
    userId: string;
    orderDate: Date;
    orderDetails: OrderDetail[];
  }
  