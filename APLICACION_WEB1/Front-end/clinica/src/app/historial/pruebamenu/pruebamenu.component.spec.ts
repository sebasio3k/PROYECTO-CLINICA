import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebamenuComponent } from './pruebamenu.component';

describe('PruebamenuComponent', () => {
  let component: PruebamenuComponent;
  let fixture: ComponentFixture<PruebamenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebamenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
