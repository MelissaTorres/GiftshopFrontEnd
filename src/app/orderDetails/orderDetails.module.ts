import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrderDetailsRoutingModule } from './orderDetails-routing.module';
import { OrderDetailListComponent } from './orderDetail-list/orderDetail-list.component';
import { OrderDetailsService } from './services/orderDetails.service';

@NgModule({
  declarations: [
    OrderDetailListComponent,
  ],
  imports: [
    SharedModule,
    OrderDetailsRoutingModule
  ],
  providers: [OrderDetailsService],
  entryComponents: []
})
export class OrderDetailsModule { }