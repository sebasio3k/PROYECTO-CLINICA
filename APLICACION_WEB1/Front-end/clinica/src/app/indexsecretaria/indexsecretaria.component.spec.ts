import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexsecretariaComponent } from './indexsecretaria.component';

describe('IndexsecretariaComponent', () => {
  let component: IndexsecretariaComponent;
  let fixture: ComponentFixture<IndexsecretariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexsecretariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexsecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
