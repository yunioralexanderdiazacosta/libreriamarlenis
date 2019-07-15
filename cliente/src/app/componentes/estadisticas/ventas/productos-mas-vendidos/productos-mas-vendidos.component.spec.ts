import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMasVendidosComponent } from './productos-mas-vendidos.component';

describe('ProductosMasVendidosComponent', () => {
  let component: ProductosMasVendidosComponent;
  let fixture: ComponentFixture<ProductosMasVendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosMasVendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosMasVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
