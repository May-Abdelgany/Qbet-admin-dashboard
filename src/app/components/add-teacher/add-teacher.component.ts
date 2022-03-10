import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  errorMessage: string = "";
  constructor(private _TeacherService: TeacherService, private _Router: Router) { }
  addTeacherForm: FormGroup = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    lastname: new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/)]),
    role: new FormControl('teacher')
  });
  ngOnInit(): void {
  }

  add(addAdminForm: FormGroup) {
    this._TeacherService.addTeacher(this.addTeacherForm.value).subscribe((Response) => {
      if (Response.data != null) {
        this._Router.navigate(['teachers']);
      }
    },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(this.errorMessage)
      })
  }
}
