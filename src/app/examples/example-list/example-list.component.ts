import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { ExamplesService } from '../services/examples.service';
import { Example } from '../../common/models/example.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { merge } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent extends ComponentBase implements AfterViewInit {
//export class ExampleListComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Example>;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) st: MatSort;

  constructor(
    private _examplesService: ExamplesService,
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService) {
    super();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getPage(1);
  }

  //ngOnInit() {
  //  this.getPage(1);
  //}

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._examplesService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  sort(value: string) {
    this._paginatedRequest.orderBy = value;
    this.getPage(this._paginatedRequest.page);
  }

  delete(example: Example) {
    this._messageBox.confirm({ key: 'examples.CONFIRM_DELETE', arg: { name: example.name } }, 'examples.DELETE')
      .subscribe((result: boolean) => {
        if (result) {
          this._examplesService.delete(example.id).subscribe(() => {
            this.getPage(1);
          }, error => this._errorHandler.handle(error));
        }
      });
  }
}
