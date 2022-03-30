import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsInCourseComponent } from './students-in-course.component';

describe('StudentsInCourseComponent', () => {
  let component: StudentsInCourseComponent;
  let fixture: ComponentFixture<StudentsInCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsInCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsInCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
