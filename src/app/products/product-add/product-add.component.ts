import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { ProductsService } from '../services/products.service';
import { Product } from '../../common/models/product.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Product>;

  constructor(
    private _productsService: ProductsService,
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService) {
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

  add(product: Product) {
    this._productsService.save(product);
  }
}
