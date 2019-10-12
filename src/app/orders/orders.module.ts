import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    OrderListComponent,
  ],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ],
  providers: [OrdersService],
  entryComponents: []
})
export class OrdersModule { }