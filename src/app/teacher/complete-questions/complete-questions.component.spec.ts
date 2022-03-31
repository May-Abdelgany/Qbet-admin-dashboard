import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteQuestionsComponent } from './complete-questions.component';

describe('CompleteQuestionsComponent', () => {
  let component: CompleteQuestionsComponent;
  let fixture: ComponentFixture<CompleteQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
