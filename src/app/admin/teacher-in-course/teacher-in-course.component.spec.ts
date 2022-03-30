import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInCourseComponent } from './teacher-in-course.component';

describe('TeacherInCourseComponent', () => {
  let component: TeacherInCourseComponent;
  let fixture: ComponentFixture<TeacherInCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherInCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherInCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
