import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_URL } from '../../core/api-url.token';
import { ASSETS_URL } from '../../core/assets-url.token';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { Order } from 'src/app/common/models/order.model';

@Injectable()
export class OrdersService {

    private readonly _url: string;

    constructor(
        private _httpClient: HttpClient,
        @Inject(API_URL) apiUrl: string,
        @Inject(ASSETS_URL) assetsUrl: string) {
        this._url = `${apiUrl}/api/orders`;
    }

    getPage(query: PaginatedRequest): Observable<PaginatedResult<Order>> {
        const params: any = query;
        return this._httpClient.get<PaginatedResult<Order>>(this._url, { params });
    }

    get(id: string): Observable<Order> {
        return this._httpClient.get<Order>(`${this._url}/${id}`);
    }

    save(model: Order): Observable<any> {
        return this._httpClient.post<any>(this._url, model);
    }
}