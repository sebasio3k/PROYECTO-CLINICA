import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudsecretariapromocionesComponent } from './rudsecretariapromociones.component';

describe('RudsecretariapromocionesComponent', () => {
  let component: RudsecretariapromocionesComponent;
  let fixture: ComponentFixture<RudsecretariapromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudsecretariapromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudsecretariapromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
