import { ProductsEditService } from './productsEdit.service';
import { TestBed } from '@angular/core/testing';

describe('ProductsEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsEditService = TestBed.get(ProductsEditService);
    expect(service).toBeTruthy();
  });
});