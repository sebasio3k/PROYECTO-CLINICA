import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctoresComponent } from './admindoctores.component';

describe('AdmindoctoresComponent', () => {
  let component: AdmindoctoresComponent;
  let fixture: ComponentFixture<AdmindoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
