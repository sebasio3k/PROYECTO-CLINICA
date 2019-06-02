import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariacitasComponent } from './secretariacitas.component';

describe('SecretariacitasComponent', () => {
  let component: SecretariacitasComponent;
  let fixture: ComponentFixture<SecretariacitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariacitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariacitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
