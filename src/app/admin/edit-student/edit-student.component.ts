import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  student: any;
  errorMessage:string="";
  constructor(private _StudentService: StudentService,private _Router:Router) { }
  editStudentForm: FormGroup = new FormGroup({
    firstname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    lastname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
  });
  ngOnInit(): void {
    this._StudentService.showStudent().subscribe((response) => {
      if (response.data != null) {
        this.student = response.data;
        console.log(response.data);
        this.editStudentForm.controls['firstname'].setValue(this.student[0].firstname);
        this.editStudentForm.controls['lastname'].setValue(this.student[0].lastname);
        this.editStudentForm.controls['email'].setValue(this.student[0].email);
      }
    });
  }
  edit(editAdminForm:FormGroup){
    this._StudentService.editStudent(editAdminForm.value).subscribe((Response)=>{
      if(Response.data!=null){
         this._Router.navigate(['admin/showstudents']);
      }
    },
    (error)=>{
      this.errorMessage=error.error.error.error;
      console.log(this.errorMessage)
    })
  }
}
