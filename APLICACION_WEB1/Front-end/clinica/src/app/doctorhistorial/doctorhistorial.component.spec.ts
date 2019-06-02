import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorhistorialComponent } from './doctorhistorial.component';

describe('DoctorhistorialComponent', () => {
  let component: DoctorhistorialComponent;
  let fixture: ComponentFixture<DoctorhistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorhistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorhistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
