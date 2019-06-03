import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadmintratamientosComponent } from './rudadmintratamientos.component';

describe('RudadmintratamientosComponent', () => {
  let component: RudadmintratamientosComponent;
  let fixture: ComponentFixture<RudadmintratamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadmintratamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadmintratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
