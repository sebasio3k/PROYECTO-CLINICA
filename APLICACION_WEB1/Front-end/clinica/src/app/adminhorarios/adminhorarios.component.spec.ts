import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhorariosComponent } from './adminhorarios.component';

describe('AdminhorariosComponent', () => {
  let component: AdminhorariosComponent;
  let fixture: ComponentFixture<AdminhorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
