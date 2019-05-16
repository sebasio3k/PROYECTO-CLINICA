import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropromocionesComponent } from './registropromociones.component';

describe('RegistropromocionesComponent', () => {
  let component: RegistropromocionesComponent;
  let fixture: ComponentFixture<RegistropromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
