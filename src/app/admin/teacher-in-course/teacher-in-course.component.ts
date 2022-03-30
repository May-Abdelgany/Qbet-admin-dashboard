import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { EnrollService } from 'src/app/services/enroll.service';
declare var $: any;
@Component({
  selector: 'app-teacher-in-course',
  templateUrl: './teacher-in-course.component.html',
  styleUrls: ['./teacher-in-course.component.scss']
})
export class TeacherInCourseComponent implements OnInit {
  course: any;
  allTeachers: any[] = [];
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
          'teacher_id': null
        }
      }
    });
    this.showAll();
  }
  showAll() {
    this._CourseService.getTeachers().subscribe(
      response => {
        if (response.data != null) {
          this.allTeachers = response.data;
        }
      },
    error => {
       this.allTeachers=[];
      })


  }
  getId(index: number) {
    this._EnrollService.courseId = this.allTeachers[index][0].id;
    this.obj = {
      'course_id': this.courseId,
      'teacher_id': this._EnrollService.courseId
    }
    this._EnrollService.EnrollTeacherId(this.obj).subscribe((response) => {
      this.enrollId = response;
      console.log(response)
    });
  }
  Delete() {
    this._EnrollService.DeleteEnrollTeacher(this.enrollId).subscribe((response) => {
      if (response.data != null) {
        $('#exampleModal').modal('hide');
        this.showAll();
      }
    });
  }
}
