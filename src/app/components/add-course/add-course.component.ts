import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  errorMessage: string = "";
  constructor(private _CourseService: CourseService, private _Router: Router) { }
  addCourseForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(40), Validators.minLength(4)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(20)]),
  });
  ngOnInit(): void {
  }
  add(addCourseForm: FormGroup) {
    this._CourseService.addCourse(this.addCourseForm.value).subscribe((Response) => {
      if (Response.data != null) {
        this._Router.navigate(['courses']);
      }
    },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(this.errorMessage)
      })
  }
}

