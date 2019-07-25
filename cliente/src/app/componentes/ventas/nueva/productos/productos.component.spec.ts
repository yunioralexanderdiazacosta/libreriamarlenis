import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasProductosComponent } from './productos.component';

describe('VentasProductosComponent', () => {
  let component: VentasProductosComponent;
  let fixture: ComponentFixture<VentasProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
