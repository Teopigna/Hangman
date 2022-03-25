import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCellComponent } from './word-cell.component';

describe('WordCellComponent', () => {
  let component: WordCellComponent;
  let fixture: ComponentFixture<WordCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
