import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariapromocionesComponent } from './secretariapromociones.component';

describe('SecretariapromocionesComponent', () => {
  let component: SecretariapromocionesComponent;
  let fixture: ComponentFixture<SecretariapromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariapromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariapromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
