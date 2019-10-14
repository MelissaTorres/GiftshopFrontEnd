import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsAddRoutingModule } from './productAdd-routing.module';
import { ProductAddComponent } from './../productsAdd/product-add/product-add.component';
import { ProductsAddService } from './services/productsAdd.service';

@NgModule({
  declarations: [
    ProductAddComponent
  ],
  imports: [
    SharedModule,
    ProductsAddRoutingModule
  ],
  providers: [ProductsAddService],
  entryComponents: []
})
export class ProductsAddModule { }