import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error_Auth: string = "";
  constructor(private _AuthService: AuthService, private _Router: Router) {
    if (localStorage.getItem("user") != null) {
      this._Router.navigate(['home']);
    }
  }
  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/)])
    }
  )
  ngOnInit(): void {
  }
  login(loginForm: FormGroup) {
    return this._AuthService.login(loginForm.value).subscribe(
      (response) => {
        if (response.data != null) {
          localStorage.setItem('user', JSON.stringify(response.data));
         this._AuthService.data()
          this._Router.navigate(['home']);
        }
      },
      (error) => {
        this.error_Auth = error.error.error;
      }
    )

  }
}
