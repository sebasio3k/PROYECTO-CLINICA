import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcontadorComponent } from './indexcontador.component';

describe('IndexcontadorComponent', () => {
  let component: IndexcontadorComponent;
  let fixture: ComponentFixture<IndexcontadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcontadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcontadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
