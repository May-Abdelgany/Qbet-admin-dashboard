import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
}
