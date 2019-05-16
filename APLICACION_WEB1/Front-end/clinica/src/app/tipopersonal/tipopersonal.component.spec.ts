import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopersonalComponent } from './tipopersonal.component';

describe('TipopersonalComponent', () => {
  let component: TipopersonalComponent;
  let fixture: ComponentFixture<TipopersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipopersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
