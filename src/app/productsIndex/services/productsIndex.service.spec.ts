import { ProductsIndexService } from './producstIndex.service';
import { TestBed } from '@angular/core/testing';

describe('ProductsIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsIndexService = TestBed.get(ProductsIndexService);
    expect(service).toBeTruthy();
  });
});