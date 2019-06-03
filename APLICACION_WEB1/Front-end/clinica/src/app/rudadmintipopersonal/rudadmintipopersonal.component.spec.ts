import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadmintipopersonalComponent } from './rudadmintipopersonal.component';

describe('RudadmintipopersonalComponent', () => {
  let component: RudadmintipopersonalComponent;
  let fixture: ComponentFixture<RudadmintipopersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadmintipopersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadmintipopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
