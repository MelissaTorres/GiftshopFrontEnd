import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { ProductsEditRoutingModule } from './productEdit-routing.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsEditService } from './services/productsEdit.service';

@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    SharedModule,
    ProductsEditRoutingModule
  ],
  providers: [ProductsEditService],
  entryComponents: []
})
export class ProductsEditModule { }