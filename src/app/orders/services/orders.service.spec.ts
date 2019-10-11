import { OrdersService } from './orders.service';
import { TestBed } from '@angular/core/testing';

describe('OrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });
});