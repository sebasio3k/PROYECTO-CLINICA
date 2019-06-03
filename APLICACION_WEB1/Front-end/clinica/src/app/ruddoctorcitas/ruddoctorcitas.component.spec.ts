import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuddoctorcitasComponent } from './ruddoctorcitas.component';

describe('RuddoctorcitasComponent', () => {
  let component: RuddoctorcitasComponent;
  let fixture: ComponentFixture<RuddoctorcitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuddoctorcitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuddoctorcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
