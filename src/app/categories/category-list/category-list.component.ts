import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../../common/models/category.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends ComponentBase implements OnInit, OnDestroy {

    private _paginatedRequest: PaginatedRequest = {};
    page: PaginatedResult<Category>;

    constructor(
        private _categoriesService: CategoriesService,
        private _messageBox: MessageBoxService,
        private _errorHandler: ErrorHandlerService) {
        super();
    }

    ngOnInit() {
        this.getPage(1);
    }

    getPage(page: number) {
        this._paginatedRequest.page = page;
        this.registerRequest(this._categoriesService.getPage(this._paginatedRequest))
            .subscribe(response => {
                this.page = response;
            });
    }

    sort(value: string) {
        this._paginatedRequest.orderBy = value;
        this.getPage(this._paginatedRequest.page);
    }

    delete(category: Category) {
        this._messageBox.confirm({ key: 'categories.CONFIRM_DELETE', arg: { name: category.categoryName } }, 'categories.DELETE')
            .subscribe((result: boolean) => {
                if (result) {
                    this._categoriesService.delete(category.id).subscribe(() => {
                        this.getPage(1);
                    }, error => this._errorHandler.handle(error));
                }
            });
    }
}
