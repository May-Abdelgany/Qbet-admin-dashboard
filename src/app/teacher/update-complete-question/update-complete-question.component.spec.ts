import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompleteQuestionComponent } from './update-complete-question.component';

describe('UpdateCompleteQuestionComponent', () => {
  let component: UpdateCompleteQuestionComponent;
  let fixture: ComponentFixture<UpdateCompleteQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompleteQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompleteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
