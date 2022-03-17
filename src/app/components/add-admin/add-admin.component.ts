import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
declare var $:any;
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  constructor(private _AdminService:AdminService,private _Router:Router) { }
  addAdminForm: FormGroup = new FormGroup({
    firstname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    lastname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/)]),
    role: new FormControl('admin')
  });
  errorMessage:string="";
  ngOnInit(): void {
  }
  add(addAdminForm:FormGroup){
     this._AdminService.addAdmin(addAdminForm.value).subscribe((Response)=>{
      if(Response.data!=null){
         this._Router.navigate(['admins']);
      }
    },
    (error)=>{
      this.errorMessage=error.error.error;
      console.log(this.errorMessage)
    })
  }
}
