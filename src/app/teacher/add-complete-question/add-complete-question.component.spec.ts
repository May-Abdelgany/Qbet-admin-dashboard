import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompleteQuestionComponent } from './add-complete-question.component';

describe('AddCompleteQuestionComponent', () => {
  let component: AddCompleteQuestionComponent;
  let fixture: ComponentFixture<AddCompleteQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompleteQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompleteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
