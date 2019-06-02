import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudoctorComponent } from './menudoctor.component';

describe('MenudoctorComponent', () => {
  let component: MenudoctorComponent;
  let fixture: ComponentFixture<MenudoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
