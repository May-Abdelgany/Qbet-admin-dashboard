import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfQuestionsComponent } from './tf-questions.component';

describe('TfQuestionsComponent', () => {
  let component: TfQuestionsComponent;
  let fixture: ComponentFixture<TfQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
