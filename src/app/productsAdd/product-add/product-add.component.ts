import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { ProductsAddService } from '../../productsAdd/services/productsAdd.service';
import { Product } from '../../common/models/product.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterLink, Router } from '@angular/router';
import { ProductInfoListComponent } from 'src/app/productsInfo/productInfo-list/productInfo-list.component';
import { Category } from '../../common/models/category.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent extends ComponentBase implements OnInit, OnDestroy {

  private _paginatedRequest: PaginatedRequest = {};
  page: PaginatedResult<Product>;
  pageCat: PaginatedResult<Category>;
  addForm: FormGroup;
  productName: string;
  categoryName: string; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _productsService: ProductsAddService,
    private _messageBox: MessageBoxService,
    private _errorHandler: ErrorHandlerService) {
    super();
  }

  ngOnInit() {
    this.getPage(1);
    this.addForm = this.formBuilder.group({
      productName: ['', ],
      description: [''],
      characteristics: [''],
      price: ['', Validators.required, Validators.maxLength(12), Validators.minLength(1)],
      categoryId: ['']
    });
  }

  onSubmit() {
    this.add();  
  }

  getPage(page: number) {
    this._paginatedRequest.page = page;
    this.registerRequest(this._productsService.getPage(this._paginatedRequest))
      .subscribe(response => {
        this.page = response;
      });
  }

  add() {
    var product = new Product();
    product.productName = this.addForm.value.productName;
    product.description = this.addForm.value.description;
    product.characteristics = this.addForm.value.characteristics;
    product.price = this.addForm.value.price;
    product.categoryId = this.addForm.value.categoryId;
    this._productsService.save(product).subscribe(response => {
      var res = response;
      this.router.navigate(['products'])
    });
  }
}

