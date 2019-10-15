import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIndexListComponent } from './productIndex-list.component';

describe('ProductIndexListComponent', () => {
  let component: ProductIndexListComponent;
  let fixture: ComponentFixture<ProductIndexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIndexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIndexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});