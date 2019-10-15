import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIndexListComponent } from './productsIndex-list/productIndex-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductIndexListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsIndexRoutingModule { }