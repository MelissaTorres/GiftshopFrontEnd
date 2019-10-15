import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService],
  entryComponents: []
})
export class ProductsModule { }
