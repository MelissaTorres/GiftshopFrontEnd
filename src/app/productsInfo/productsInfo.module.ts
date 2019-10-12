import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsInfoRoutingModule } from './productsInfo-routing-module';
import { ProductInfoListComponent } from './productInfo-list/productInfo-list.component';
import { ProductsInfoService } from './services/productsInfo.service';

@NgModule({
  declarations: [
    ProductInfoListComponent,
  ],
  imports: [
    SharedModule,
    ProductsInfoRoutingModule
  ],
  providers: [ProductsInfoService],
  entryComponents: []
})
export class ProductsInfoModule { }