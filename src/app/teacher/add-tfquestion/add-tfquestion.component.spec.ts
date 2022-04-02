import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTFQuestionComponent } from './add-tfquestion.component';

describe('AddTFQuestionComponent', () => {
  let component: AddTFQuestionComponent;
  let fixture: ComponentFixture<AddTFQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTFQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTFQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
