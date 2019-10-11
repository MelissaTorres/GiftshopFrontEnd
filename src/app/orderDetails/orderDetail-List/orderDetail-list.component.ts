import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { OrderDetailsService } from '../services/orderDetails.service';
import { OrderDetail } from '../../common/models/orderDetail.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';

@Component({
  selector: 'app-orderDetail-list',
  templateUrl: './orderDetail;-list.component.html',
  styleUrls: ['./orderDetail-list.component.scss']
})
export class OrderDetailListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<OrderDetail>;

  constructor(
    private _orderDetailsService: OrderDetailsService,
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService) {
    super();
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._orderDetailsService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  sort(value: string) {
    this._paginatedRequest.orderBy = value;
    this.getPage(this._paginatedRequest.page);
  }

  delete(orderDetail: OrderDetail) {
    this._messageBox.confirm({ key: 'orderDetails.CONFIRM_DELETE', arg: { name: orderDetail.id } }, 'orderDetails.DELETE')
      .subscribe((result: boolean) => {
        if (result) {
          this._orderDetailsService.delete(orderDetail.id).subscribe(() => {
            this.getPage(1);
          }, error => this._errorHandler.handle(error));
        }
      });
  }
}
