import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QBet-project';
  role:any;
  islogin:any;
  constructor(private _AuthService: AuthService){}
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
}
