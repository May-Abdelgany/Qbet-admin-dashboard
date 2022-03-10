import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  allAdmins: any[] = [];
  adminId: any;
  errorMessage:string="";
  idUser:any;
  constructor(private _AuthService:AuthService,private _AdminService: AdminService, private _Router: Router) { }
  ngOnInit(): void {
    this.idUser=JSON.parse(this._AuthService.data()).id;
    this.showAll();
  }
  showAll() {
    this._AdminService.getAdmins().subscribe((response) => {
      if (response.data != null) {
        this.allAdmins = response.data;
        console.log(response.data);
      }
    })
  }
  getId(index: number) {
    this._AdminService.adminId = this.allAdmins[index].id;
    return this._AdminService.adminId;
  }
  Delete() {
    this._AdminService.deleteAdmin(this._AdminService.adminId).subscribe((response) => {
      if (response.data != null) {
        $('#exampleModal').modal('hide');
        this.allAdmins = response.data;
        this.showAll();
      }
    })
  }
}
