import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailListComponent } from './orderDetail-list/orderDetail-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderDetailsRoutingModule { }
