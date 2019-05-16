import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodepartamentoComponent } from './registrodepartamento.component';

describe('RegistrodepartamentoComponent', () => {
  let component: RegistrodepartamentoComponent;
  let fixture: ComponentFixture<RegistrodepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
