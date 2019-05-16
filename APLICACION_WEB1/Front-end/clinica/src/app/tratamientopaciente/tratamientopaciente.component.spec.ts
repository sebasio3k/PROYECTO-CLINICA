import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientopacienteComponent } from './tratamientopaciente.component';

describe('TratamientopacienteComponent', () => {
  let component: TratamientopacienteComponent;
  let fixture: ComponentFixture<TratamientopacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientopacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientopacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
