import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductEditComponent } from './../ProductsEdit/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductEditComponent
  },
];

@core.NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsEditRoutingModule { }