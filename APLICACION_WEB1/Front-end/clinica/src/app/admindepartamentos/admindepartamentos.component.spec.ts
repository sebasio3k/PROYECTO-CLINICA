import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindepartamentosComponent } from './admindepartamentos.component';

describe('AdmindepartamentosComponent', () => {
  let component: AdmindepartamentosComponent;
  let fixture: ComponentFixture<AdmindepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
