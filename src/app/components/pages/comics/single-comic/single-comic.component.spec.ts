import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComicComponent } from './single-comic.component';

describe('SingleComicComponent', () => {
  let component: SingleComicComponent;
  let fixture: ComponentFixture<SingleComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
