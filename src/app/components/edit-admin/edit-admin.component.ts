import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {
  admin: any;
  constructor(private _AdminService: AdminService,private _Router:Router) { }

  editAdminForm: FormGroup = new FormGroup({
    firstname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    lastname: new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
  });
  errorMessage:string="";
  ngOnInit(): void {
    this._AdminService.showAdmin().subscribe((response) => {
      if (response.data != null) {
        this.admin = response.data;
        console.log(response.data);
        this.editAdminForm.controls['firstname'].setValue(this.admin[0].firstname);
        this.editAdminForm.controls['lastname'].setValue(this.admin[0].lastname);
        this.editAdminForm.controls['email'].setValue(this.admin[0].email);
      }
    })
  }
  edit(editAdminForm:FormGroup){
    this._AdminService.editAdmin(editAdminForm.value).subscribe((Response)=>{
      if(Response.data!=null){
         this._Router.navigate(['admins']);
      }
    },
    (error)=>{
      this.errorMessage=error.error.error.error;
      console.log(this.errorMessage)
    })
  }
}
