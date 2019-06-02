import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusecretariaComponent } from './menusecretaria.component';

describe('MenusecretariaComponent', () => {
  let component: MenusecretariaComponent;
  let fixture: ComponentFixture<MenusecretariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusecretariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
