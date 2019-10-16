import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsAddRoutingModule } from './productAdd-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsAddService } from './services/productsAdd.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductAddComponent
  ],
  imports: [
    SharedModule,
    ProductsAddRoutingModule,
    FormsModule
  ],
  providers: [ProductsAddService],
  entryComponents: []
})
export class ProductsAddModule { }