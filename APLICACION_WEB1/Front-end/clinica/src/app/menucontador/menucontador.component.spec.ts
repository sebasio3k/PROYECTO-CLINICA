import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucontadorComponent } from './menucontador.component';

describe('MenucontadorComponent', () => {
  let component: MenucontadorComponent;
  let fixture: ComponentFixture<MenucontadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucontadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucontadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
