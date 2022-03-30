import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { EnrollService } from 'src/app/services/enroll.service';
declare var $: any;
@Component({
  selector: 'app-students-in-course',
  templateUrl: './students-in-course.component.html',
  styleUrls: ['./students-in-course.component.scss']
})
export class StudentsInCourseComponent implements OnInit {
  course: any;
  allStudents: any[] = [];
  courseId: any;
  enrollId: any;
  obj: any;
  constructor(private _CourseService: CourseService, private _EnrollService: EnrollService, private _Router: Router) { }
  ngOnInit(): void {
    this._CourseService.showCourse().subscribe((response) => {
      if (response.data != null) {
        this.course = response.data;
        this.courseId = response.data.id;
        this.obj = {
          'course_id': this.courseId,
          'student_id': null
        }
      }
    });
    this.showAll();
  }
  showAll() {
    this._CourseService.getStudents().subscribe(
      response => {
        if (response.data != null) {
          this.allStudents = response.data;
        }
      },
      error => {
        this.allStudents = [];
      })
  }
  getId(index: number) {
    this._EnrollService.courseId = this.allStudents[index][0].id;
    this.obj = {
      'course_id': this.courseId,
      'student_id': this._EnrollService.courseId
    }
    this._EnrollService.EnrollId(this.obj).subscribe((response) => {
      this.enrollId = response;
    });
  }
  Delete() {
    this._EnrollService.DeleteEnroll(this.enrollId).subscribe((response) => {
      if (response.data != null) {
        $('#exampleModal').modal('hide');
        this.showAll();
      }
    })
  }
}
