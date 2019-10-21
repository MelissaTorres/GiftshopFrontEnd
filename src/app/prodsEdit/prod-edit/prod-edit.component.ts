import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { ProdsEditService } from '../services/prods.service';
import { Product } from '../../common/models/product.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-prod-edit',
    templateUrl: './prod-edit.component.html',
    styleUrls: ['./prod-edit.component.scss']
})
export class ProdEditComponent extends ComponentBase implements OnInit, OnDestroy {

    private _paginatedRequest: PaginatedRequest = {};
    page: PaginatedResult<Product>;
    product: Product;
    editForm: FormGroup;
    categoryNames;
    catName: string;
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private actRoute: ActivatedRoute,
        private _productsService: ProdsEditService,
        private _messageBox: MessageBoxService,
        private _errorHandler: ErrorHandlerService

    ) {
        super();
    }

    ngOnInit() {
        this._productsService.get(this.actRoute.snapshot.params.id).subscribe(response => {
            this.product = response;
        })

        this.editForm = this.formBuilder.group({
            productName: [''],
            description: [''],
            characteristics: [''],
            price: [''],
            categoryId: ['']
        });
        this.getCategories();
    }

    onSubmit() {
        this.update(this.actRoute.snapshot.params.id);
    }

    update(id: string) {
        this.product.id = id;
        this.product.productName = this.editForm.value.productName;
        this.product.description = this.editForm.value.description;
        this.product.characteristics = this.editForm.value.characteristics;
        this.product.price = this.editForm.value.price;
        this.product.categoryId = this.editForm.value.categoryId;
        this._productsService.update(id, this.product).subscribe(response => {
            var res = response;
            this.router.navigate(['products'])
        })
    }

    getCategories() {
        this._productsService.getCategories().subscribe(response => {
          this.categoryNames = response;
          if(typeof this.categoryNames !== "undefined") {
            for (let i = 0; i < this.categoryNames.length; i++) {
              if (this.product.categoryId == this.categoryNames[i].id) {
                this.catName = this.categoryNames[i].categoryName;
                console.log(this.catName);
              }      
            }
          }
        });
    }
}