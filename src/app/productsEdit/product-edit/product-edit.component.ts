import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { ProductsEditService } from '../../productsEdit/services/productsEdit.service';
import { Product } from '../../common/models/product.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Product>;

  constructor(
    private _productsService: ProductsEditService,
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

  update(id: string, product: Product) {
    this._productsService.update(id, product);
  }
}
