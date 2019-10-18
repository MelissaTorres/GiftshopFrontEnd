import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { ProductsInfoService } from '../services/productsInfo.service';
import { Product } from '../../common/models/product.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../common/models/category.model';

@Component({
  selector: 'app-productInfo-list',
  templateUrl: './productInfo-list.component.html',
  styleUrls: ['./productInfo-list.component.scss']
})
export class ProductInfoListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  product: Product;
  page: PaginatedResult<Product>;
  categoryNames;
  catName: string;

  constructor(
    private actRoute: ActivatedRoute,
    private _productsInfoService: ProductsInfoService) {
    super();
  }

  ngOnInit() {
    this._productsInfoService.get(this.actRoute.snapshot.params.id).subscribe(response => {
      this.product = response;
    });
    this.getCategories();
    
  }

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._productsInfoService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  getCategories() {
    this._productsInfoService.getCategories().subscribe(response => {
      this.categoryNames = response;
      if(typeof this.categoryNames !== "undefined") {
        for (let i = 0; i < this.categoryNames.length; i++) {
          console.log('dasdsads');
          if (this.product.categoryId == this.categoryNames[i].id) {
            this.catName = this.categoryNames[i].categoryName;
            console.log(this.catName);
          }      
        }
      }
    });
  }
}
