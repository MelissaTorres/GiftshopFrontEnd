import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    CategoryListComponent,
  ],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ],
  providers: [CategoriesService],
  entryComponents: []
})
export class CategoriesModule { }