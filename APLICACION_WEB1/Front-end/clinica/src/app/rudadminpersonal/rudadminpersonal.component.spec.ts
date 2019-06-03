import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadminpersonalComponent } from './rudadminpersonal.component';

describe('RudadminpersonalComponent', () => {
  let component: RudadminpersonalComponent;
  let fixture: ComponentFixture<RudadminpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadminpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadminpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
