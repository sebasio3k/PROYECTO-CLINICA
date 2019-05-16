import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrohorarioComponent } from './registrohorario.component';

describe('RegistrohorarioComponent', () => {
  let component: RegistrohorarioComponent;
  let fixture: ComponentFixture<RegistrohorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrohorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrohorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
