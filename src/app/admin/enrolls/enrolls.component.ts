import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-enrolls',
  templateUrl: './enrolls.component.html',
  styleUrls: ['./enrolls.component.scss']
})
export class EnrollsComponent implements OnInit {
  allStudents: any[] = [];
  allCourses: any[] = [];
  Id: any;
  all: any;
  value: any[] = [];
  studentId: any;
  errorMessage: string = "";
  enrollForm: FormGroup = new FormGroup({
    course_id: new FormControl(null, [Validators.required]),
    student_id: new FormControl(null, [Validators.required])
  });
  constructor(private _AuthService: AuthService, private _StudentService: StudentService, private _CourseService: CourseService, private _Router: Router) { }

  ngOnInit(): void {
    this.showAll();
    this.showAllCourses();
  }
  showAll() {
    this._StudentService.getStudents().subscribe((response) => {
      if (response.data != null) {
        this.allStudents = response.data;
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
    this._StudentService.Get_studentId().subscribe((Response) => {
      this.Id = Response;
    })
  }
  getId(index: number) {
    this._StudentService.studentId = this.allStudents[index].id;
    this.get_id();
    setTimeout(() => {
      console.log(this.Id);
      this.enrollForm.controls['student_id'].setValue(this.Id);
    }, 1000);
    return this._StudentService.studentId;
  }

  show(enrollForm: FormGroup) {
    console.log(enrollForm.value);
    this._StudentService.enrollStudent(enrollForm.value).subscribe((Response) => {
      if (Response.data == 'Record added successfully!') {
        $('#exampleModal').modal('hide');
        this.showAll();
      }
    },
      (error) => {
        if (error.message == 'Http failure response for http://127.0.0.1:8000/api/enroll/student: 500 Internal Server Error') {
          $('#exampleModal').modal('hide');
          this.errorMessage = 'This student is already in this course';
          console.log(this.errorMessage)
        }
      })
  }

}
