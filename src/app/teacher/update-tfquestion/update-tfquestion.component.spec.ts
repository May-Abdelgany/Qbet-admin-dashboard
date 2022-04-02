import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTFQuestionComponent } from './update-tfquestion.component';

describe('UpdateTFQuestionComponent', () => {
  let component: UpdateTFQuestionComponent;
  let fixture: ComponentFixture<UpdateTFQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTFQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTFQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
