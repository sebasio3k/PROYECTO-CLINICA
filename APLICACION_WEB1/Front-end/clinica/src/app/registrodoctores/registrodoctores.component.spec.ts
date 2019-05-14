import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodoctoresComponent } from './registrodoctores.component';

describe('RegistrodoctoresComponent', () => {
  let component: RegistrodoctoresComponent;
  let fixture: ComponentFixture<RegistrodoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
