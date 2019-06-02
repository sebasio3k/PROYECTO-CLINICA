import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariapacientesComponent } from './secretariapacientes.component';

describe('SecretariapacientesComponent', () => {
  let component: SecretariapacientesComponent;
  let fixture: ComponentFixture<SecretariapacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariapacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariapacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
