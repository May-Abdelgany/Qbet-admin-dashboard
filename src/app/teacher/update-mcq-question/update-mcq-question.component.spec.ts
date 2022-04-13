import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMcqQuestionComponent } from './update-mcq-question.component';

describe('UpdateMcqQuestionComponent', () => {
  let component: UpdateMcqQuestionComponent;
  let fixture: ComponentFixture<UpdateMcqQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMcqQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMcqQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
