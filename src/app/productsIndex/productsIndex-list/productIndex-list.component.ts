import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { Product } from '../../common/models/product.model';
import { ProductsIndexService } from '../services/producstIndex.service';
import { Category } from 'src/app/common/models/category.model';
import { MessageBoxService } from 'src/app/core/services/message-box.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-productIndex-list',
  templateUrl: './productIndex-list.component.html',
  styleUrls: ['./productIndex-list.component.scss']
})
export class ProductIndexListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Product>;
  productName: string;
  cat: Category = new Category();
  categoryNames;

  constructor(
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService,
    private _productsService: ProductsIndexService) {
    super();
  }

  ngOnInit() {
    this.getPage(1);
    this.getCategories();
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

  getCategories() {
    this._productsService.getCategories().subscribe(response => {
      this.categoryNames = response;
    });
  }

  getCategoriesPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._productsService.getCategoriesPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  searchCategory() {
    console.log(this.cat.id);
    this._paginatedRequest.term = this.cat.id;
    this.registerRequest(this._productsService.getCategoriesPage(this._paginatedRequest))
    .subscribe(response => {
      this.page = response;
      this.getCategoriesPage(1);
    })
  }
}
