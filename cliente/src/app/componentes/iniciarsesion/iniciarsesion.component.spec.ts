import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionComponent } from './iniciarsesion.component';

describe('IniciarsesionComponent', () => {
  let component: IniciarsesionComponent;
  let fixture: ComponentFixture<IniciarsesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarsesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
