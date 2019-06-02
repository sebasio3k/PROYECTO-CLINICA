import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctortpacienteComponent } from './doctortpaciente.component';

describe('DoctortpacienteComponent', () => {
  let component: DoctortpacienteComponent;
  let fixture: ComponentFixture<DoctortpacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctortpacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctortpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
