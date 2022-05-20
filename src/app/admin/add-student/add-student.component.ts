import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  errorMessage:string="";
  constructor(private _StudentService:StudentService,private _Router:Router) { }
  addStudentForm: FormGroup = new FormGroup({
    firstname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    lastname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
    role: new FormControl('student')
  });
  ngOnInit(): void {
  }
  add(addAdminForm: FormGroup) {
    this._StudentService.addStudent(this.addStudentForm.value).subscribe((Response) => {
      if (Response.data != null) {
        this._Router.navigate(['admin/showstudents']);
      }
    },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(this.errorMessage)
      })
  }
}
