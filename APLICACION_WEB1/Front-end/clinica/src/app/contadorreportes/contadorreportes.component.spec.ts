import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorreportesComponent } from './contadorreportes.component';

describe('ContadorreportesComponent', () => {
  let component: ContadorreportesComponent;
  let fixture: ComponentFixture<ContadorreportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorreportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
