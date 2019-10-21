import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_URL } from '../../core/api-url.token';
import { ASSETS_URL } from '../../core/assets-url.token';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { Product } from '../../common/models/product.model';

@Injectable()
export class ProductsIndexService {

    private readonly _url: string;
    private readonly _urlCat: string;
    private readonly _urlProdCat: string;

    constructor(
        private _httpClient: HttpClient,
        @Inject(API_URL) apiUrl: string,
        @Inject(ASSETS_URL) assetsUrl: string) {
        this._url = `${apiUrl}/api/products`;
        this._urlCat = this._url + `/getCategories`;
        this._urlProdCat = this._url + `/getProductsCategory`;
    }

    getPage(query: PaginatedRequest): Observable<PaginatedResult<Product>> {
        const params: any = query;
        return this._httpClient.get<PaginatedResult<Product>>(this._url, { params });
    }

    get(id: string): Observable<Product> {
        return this._httpClient.get<Product>(`${this._url}/${id}`);
    }

    getCategories() {
        return this._httpClient.get(this._urlCat);
    }

    getCategoriesPage(query: PaginatedRequest): Observable<PaginatedResult<Product>> {
        const params: any = query;
        return this._httpClient.get<PaginatedResult<Product>>(this._urlProdCat, { params });
    }
}