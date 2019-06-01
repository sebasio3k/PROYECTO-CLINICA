import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpersonalComponent } from './adminpersonal.component';

describe('AdminpersonalComponent', () => {
  let component: AdminpersonalComponent;
  let fixture: ComponentFixture<AdminpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
