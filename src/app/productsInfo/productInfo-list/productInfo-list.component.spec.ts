import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoListComponent } from './productInfo-list.component';

describe('ProductInfoListComponent', () => {
  let component: ProductInfoListComponent;
  let fixture: ComponentFixture<ProductInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });