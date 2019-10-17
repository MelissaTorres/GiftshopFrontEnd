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

@Component({
  selector: 'app-productInfo-list',
  templateUrl: './productInfo-list.component.html',
  styleUrls: ['./productInfo-list.component.scss']
})
export class ProductInfoListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  product: Product;
  page: PaginatedResult<Product>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private _productsInfoService: ProductsInfoService,
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService) {
    super();
  }

  ngOnInit() {
    this._productsInfoService.get(this.actRoute.snapshot.params.id).subscribe(response => {
      this.product = response;
    })
  }

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._productsInfoService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }
}
