import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit {
  teacher: any;
  errorMessage:string="";
  constructor(private _TeacherService: TeacherService,private _Router:Router) { }
  editTeacherForm: FormGroup = new FormGroup({
    firstname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    lastname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
  });
  ngOnInit(): void {
    this._TeacherService.showTeacher().subscribe((response) => {
      if (response.data != null) {
        this.teacher = response.data;
        console.log(response.data);
        this.editTeacherForm.controls['firstname'].setValue(this.teacher[0].firstname);
        this.editTeacherForm.controls['lastname'].setValue(this.teacher[0].lastname);
        this.editTeacherForm.controls['email'].setValue(this.teacher[0].email);
      }
    });
  }
  edit(editAdminForm:FormGroup){
    this._TeacherService.editTeacher(editAdminForm.value).subscribe((Response)=>{
      if(Response.data!=null){
         this._Router.navigate(['admin/showteachers']);
      }
    },
    (error)=>{
      this.errorMessage=error.error.error.error;
      console.log(this.errorMessage)
    })
  }

}
