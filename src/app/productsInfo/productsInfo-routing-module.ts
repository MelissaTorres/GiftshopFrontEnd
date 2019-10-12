import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductInfoListComponent } from './productInfo-list/productInfo-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductInfoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsInfoRoutingModule { }
