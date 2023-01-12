import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsgridComponent } from './news-grid.component';

describe('NewsgridComponent', () => {
  let component: NewsgridComponent;
  let fixture: ComponentFixture<NewsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
