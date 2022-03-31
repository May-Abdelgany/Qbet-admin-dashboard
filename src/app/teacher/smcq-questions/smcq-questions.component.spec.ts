import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmcqQuestionsComponent } from './smcq-questions.component';

describe('SmcqQuestionsComponent', () => {
  let component: SmcqQuestionsComponent;
  let fixture: ComponentFixture<SmcqQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmcqQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmcqQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
