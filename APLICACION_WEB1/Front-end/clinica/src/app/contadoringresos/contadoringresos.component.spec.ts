import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoringresosComponent } from './contadoringresos.component';

describe('ContadoringresosComponent', () => {
  let component: ContadoringresosComponent;
  let fixture: ComponentFixture<ContadoringresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadoringresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadoringresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
