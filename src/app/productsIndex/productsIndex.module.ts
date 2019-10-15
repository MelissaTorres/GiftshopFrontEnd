
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsIndexRoutingModule } from './productsIndex-routing.module';
import { ProductIndexListComponent } from './productsIndex-list/productIndex-list.component';
import { ProductsIndexService } from './services/producstIndex.service'

@NgModule({
  declarations: [
    ProductIndexListComponent,
  ],
  imports: [
    SharedModule,
    ProductsIndexRoutingModule
  ],
  providers: [ProductsIndexService],
  entryComponents: []
})
export class ProductsIndexModule { }
