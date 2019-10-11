import { OrderDetailsService } from './orderDetails.service';
import { TestBed } from '@angular/core/testing';

describe('OrderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderDetailsService = TestBed.get(OrderDetailsService);
    expect(service).toBeTruthy();
  });
});