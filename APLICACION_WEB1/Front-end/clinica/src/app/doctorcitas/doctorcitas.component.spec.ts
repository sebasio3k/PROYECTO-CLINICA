import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorcitasComponent } from './doctorcitas.component';

describe('DoctorcitasComponent', () => {
  let component: DoctorcitasComponent;
  let fixture: ComponentFixture<DoctorcitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorcitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
