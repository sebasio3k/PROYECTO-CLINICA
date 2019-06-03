import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuddoctorhistorialComponent } from './ruddoctorhistorial.component';

describe('RuddoctorhistorialComponent', () => {
  let component: RuddoctorhistorialComponent;
  let fixture: ComponentFixture<RuddoctorhistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuddoctorhistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuddoctorhistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
