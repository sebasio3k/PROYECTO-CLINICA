import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpromocionesComponent } from './adminpromociones.component';

describe('AdminpromocionesComponent', () => {
  let component: AdminpromocionesComponent;
  let fixture: ComponentFixture<AdminpromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
