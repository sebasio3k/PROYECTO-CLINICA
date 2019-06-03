import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadmindepartamentosComponent } from './rudadmindepartamentos.component';

describe('RudadmindepartamentosComponent', () => {
  let component: RudadmindepartamentosComponent;
  let fixture: ComponentFixture<RudadmindepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadmindepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadmindepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
