import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudadminpromocionesComponent } from './rudadminpromociones.component';

describe('RudadminpromocionesComponent', () => {
  let component: RudadminpromocionesComponent;
  let fixture: ComponentFixture<RudadminpromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudadminpromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudadminpromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
