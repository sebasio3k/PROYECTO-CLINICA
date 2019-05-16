import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropersonalComponent } from './registropersonal.component';

describe('RegistropersonalComponent', () => {
  let component: RegistropersonalComponent;
  let fixture: ComponentFixture<RegistropersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
