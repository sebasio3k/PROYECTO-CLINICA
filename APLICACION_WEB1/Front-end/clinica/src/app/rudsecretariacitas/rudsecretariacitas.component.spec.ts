import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudsecretariacitasComponent } from './rudsecretariacitas.component';

describe('RudsecretariacitasComponent', () => {
  let component: RudsecretariacitasComponent;
  let fixture: ComponentFixture<RudsecretariacitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudsecretariacitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudsecretariacitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
