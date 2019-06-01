import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintratamientosComponent } from './admintratamientos.component';

describe('AdmintratamientosComponent', () => {
  let component: AdmintratamientosComponent;
  let fixture: ComponentFixture<AdmintratamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintratamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
