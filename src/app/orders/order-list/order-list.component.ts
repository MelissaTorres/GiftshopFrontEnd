import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { OrdersService } from '../services/orders.service';
import { Order } from '../../common/models/order.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Order>;

  constructor(
    private _ordersService: OrdersService,
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService) {
    super();
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._ordersService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  sort(value: string) {
    this._paginatedRequest.orderBy = value;
    this.getPage(this._paginatedRequest.page);
  }

  delete(order: Order) {
    this._messageBox.confirm({ key: 'orders.CONFIRM_DELETE', arg: { name: order.id } }, 'orders.DELETE')
      .subscribe((result: boolean) => {
        if (result) {
          this._ordersService.delete(order.id).subscribe(() => {
            this.getPage(1);
          }, error => this._errorHandler.handle(error));
        }
      });
  }
}
