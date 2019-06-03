import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadminhorariosComponent } from './rudadminhorarios.component';

describe('RudadminhorariosComponent', () => {
  let component: RudadminhorariosComponent;
  let fixture: ComponentFixture<RudadminhorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadminhorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadminhorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
