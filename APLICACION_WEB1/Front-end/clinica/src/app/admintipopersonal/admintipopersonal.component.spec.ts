import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintipopersonalComponent } from './admintipopersonal.component';

describe('AdmintipopersonalComponent', () => {
  let component: AdmintipopersonalComponent;
  let fixture: ComponentFixture<AdmintipopersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintipopersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintipopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
