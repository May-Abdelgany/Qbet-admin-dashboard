import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  role: string = "";
  islogin: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    this.role=JSON.parse(localStorage.getItem("user")|| '{}').role;
    this._AuthService.decode.subscribe(() => {
      if (this._AuthService.decode.getValue() == null) {
        this.islogin = false;
      }
      else {
        this.islogin = true;
      }
    });
  }
  logout() {
    this._AuthService.decode.next(null);
    this._Router.navigate(['login']);
    localStorage.clear();
  }

  toggle(){
    if($('.menue').css('left')=='100px'){
      $('.menue').animate({'left':'0px'},600);
      $('.sidebar').animate({'left':'-101%'},600);
    }
    else{
      $('.menue').animate({'left':'100px'},600);
      $('.sidebar').animate({'left':'0%'},600);
    }
  }
}
