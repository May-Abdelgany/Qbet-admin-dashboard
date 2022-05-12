import { StudentService } from 'src/app/services/student.service';
import { CourseService } from 'src/app/services/course.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  user_id: any;
  allCourses: any[] = [];
  student_id: any;
  course_id: any[] = [];
  myCourses: any[] = [];
  constructor(private _AuthService: AuthService, private _CourseService: CourseService, private _StudentService: StudentService) { }

  ngOnInit(): void {
    this.user_id = JSON.parse(localStorage.getItem('user') || '{}').id;
    this._StudentService.Get_Id(this.user_id).subscribe((response) => {
      this.student_id = response;
      console.log(this.student_id)
      this.courses_id()
    })

  }
  courses_id() {
    this._CourseService.getStudentCourses(this.student_id).subscribe((response) => {
      this.course_id = response;
      console.log(this.course_id)
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
}
