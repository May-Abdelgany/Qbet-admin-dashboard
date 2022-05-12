import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDoExamComponent } from './student-do-exam.component';

describe('StudentDoExamComponent', () => {
  let component: StudentDoExamComponent;
  let fixture: ComponentFixture<StudentDoExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDoExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDoExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
