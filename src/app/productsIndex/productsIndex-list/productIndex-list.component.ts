import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { Product } from '../../common/models/product.model';
import { ProductsIndexService } from '../services/producstIndex.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-productIndex-list',
  templateUrl: './productIndex-list.component.html',
  styleUrls: ['./productIndex-list.component.scss']
})
export class ProductIndexListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Product>;
  productName: string;

  constructor(
    private _productsService: ProductsIndexService) {
    super();
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._productsService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  sort(value: string) {
    this._paginatedRequest.orderBy = value;
    this.getPage(this._paginatedRequest.page);
  }

  search() {
    this._paginatedRequest.term = this.productName;
    this.registerRequest(this._productsService.getPage(this._paginatedRequest))
    .subscribe(response => {
      this.page = response;
      this.getPage(1);
    })
  }
}
