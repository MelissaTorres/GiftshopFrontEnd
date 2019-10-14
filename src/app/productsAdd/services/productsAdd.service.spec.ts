import { ProductsAddService } from './productsAdd.service';
import { TestBed } from '@angular/core/testing';

describe('ProductsAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsAddService = TestBed.get(ProductsAddService);
    expect(service).toBeTruthy();
  });
});