import { TeacherService } from './../../services/teacher.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  user_id: any;
  allCourses: any[] = [];
  teacher_id: any;
  course_id: any[] = [];
  myCourses: any[] = [];
  checked: any;
  constructor(private _AuthService: AuthService, private _CourseService: CourseService, private _TeacherService: TeacherService,private _Router:Router) { }

  ngOnInit(): void {
    this.user_id = JSON.parse(localStorage.getItem('user') || '{}').id;
    this._TeacherService.Get_Id(this.user_id).subscribe((response) => {
      this.teacher_id = response;
      this.courses_id()
    })

  }
  courses_id() {
    this._CourseService.getMyCourses(this.teacher_id).subscribe((response) => {
      this.course_id = response;
      this.showCourses();
    })
  }
  showCourses() {
    for (let i = 0; i < this.course_id.length; i++) {
      this._CourseService.showMyCourses(this.course_id[i]).subscribe((response) => {
        this.myCourses[i] = response.data;
        console.log(this.myCourses)
      });
    }
  }
  getId(index: any) {
    localStorage.setItem('courseId', this.myCourses[index].id);
  }
  get_type() {
    this.checked = $('input[name="question"]:checked').val();
    $('#staticBackdrop').modal('hide');
    if (this.checked == 'complete') {
      this._Router.navigate(['teacher/complete-questions']);
    }
    else if (this.checked == 'tf') {
      this._Router.navigate(['teacher/tf-questions']);
    }
    else if (this.checked == 'smcq') {
      this._Router.navigate(['teacher/smcq-questions']);
    }
    else {
      this._Router.navigate(['teacher/dmcq-questions']);
    }
  }
}
