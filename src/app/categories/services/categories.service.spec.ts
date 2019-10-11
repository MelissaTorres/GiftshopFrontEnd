import { CategoriesService } from './categories.service';
import { TestBed } from '@angular/core/testing';

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });
});