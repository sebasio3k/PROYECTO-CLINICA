import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudsecretariapacientesComponent } from './rudsecretariapacientes.component';

describe('RudsecretariapacientesComponent', () => {
  let component: RudsecretariapacientesComponent;
  let fixture: ComponentFixture<RudsecretariapacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudsecretariapacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudsecretariapacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
