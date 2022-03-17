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
    localStorage.removeItem('user');
    this._AuthService.decode.next(null);
    this._Router.navigate(['login']);
  }

  toggle(){
    if($('.menue').css('left')=='100px'){
      $('.menue').animate({'left':'0px'},1000);
      $('.sidebar').animate({'left':'-101%'},1000);
    }
    else{
      $('.menue').animate({'left':'100px'},1000);
      $('.sidebar').animate({'left':'0%'},1000);
    }
  }
}
