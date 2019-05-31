import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacrudComponent } from './pruebacrud.component';

describe('PruebacrudComponent', () => {
  let component: PruebacrudComponent;
  let fixture: ComponentFixture<PruebacrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebacrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebacrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
