import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';
declare var $:any;
@Component({
  selector: 'app-enrolls-teacher',
  templateUrl: './enrolls-teacher.component.html',
  styleUrls: ['./enrolls-teacher.component.scss']
})
export class EnrollsTeacherComponent implements OnInit {
  allTeachers: any[] = [];
  allCourses: any[] = [];
  Id: any;
  all: any;
  value: any[] = [];
  teacherId: any;
  errorMessage: string = "";
  enrollForm: FormGroup = new FormGroup({
    course_id: new FormControl(null, [Validators.required]),
    teacher_id: new FormControl(null, [Validators.required])
  });
  constructor(private _AuthService: AuthService, private _TeacherService: TeacherService, private _CourseService: CourseService, private _Router: Router) { }

  ngOnInit(): void {
    this.showAll();
    this.showAllCourses();
  }
  showAll() {
    this._TeacherService.getTeachers().subscribe((response) => {
      if (response.data != null) {
        this.allTeachers = response.data;
        console.log(response.data);
      }
    })
  }
  showAllCourses() {
    this._CourseService.getCourses().subscribe((response) => {
      if (response.data != null) {
        this.allCourses = response.data;
        console.log(response.data);
      }
    })
  }

  get_id() {
    this._TeacherService.Get_teacherId().subscribe((Response) => {
      this.Id = Response;
    })
  }
  getId(index: number) {
    this._TeacherService.teacherId = this.allTeachers[index].id;
    this.get_id();
    setTimeout(() => {
      console.log(this.Id);
      this.enrollForm.controls['teacher_id'].setValue(this.Id);
    }, 1000);
    return this._TeacherService.teacherId;
  }

  show(enrollForm: FormGroup) {
    console.log(enrollForm.value);
    this._TeacherService.enrollTeacher(enrollForm.value).subscribe((Response) => {
      if (Response.data == 'Record added successfully!') {
        $('#exampleModal').modal('hide');
        this.showAll();
      }
    },
      (error) => {
        if (error.message == 'Http failure response for http://127.0.0.1:8000/api/enroll/teacher: 500 Internal Server Error') {
          $('#exampleModal').modal('hide');
          this.errorMessage = 'This teacher is already in this course';
          console.log(this.errorMessage)
        }
      })
  }

}
