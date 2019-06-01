import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdoctorComponent } from './indexdoctor.component';

describe('IndexdoctorComponent', () => {
  let component: IndexdoctorComponent;
  let fixture: ComponentFixture<IndexdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
