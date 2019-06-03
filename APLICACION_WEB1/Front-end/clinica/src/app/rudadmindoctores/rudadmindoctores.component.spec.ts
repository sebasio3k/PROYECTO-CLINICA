import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadmindoctoresComponent } from './rudadmindoctores.component';

describe('RudadmindoctoresComponent', () => {
  let component: RudadmindoctoresComponent;
  let fixture: ComponentFixture<RudadmindoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadmindoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadmindoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
