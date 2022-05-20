import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  error: any;
  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    token: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
    password_confirmation: new FormControl(null, [Validators.required])
  });
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  ngOnInit(): void {

    var email=JSON.parse(localStorage.getItem('email')||'{}').email;
    this.resetForm.controls['email'].setValue(email);

  }
  reset(resetForm: FormGroup) {
    localStorage.removeItem('email')
    this._AuthService.reset(resetForm.value).subscribe((response) => {
      if (response.data == 'password change successfully!') {
        this._Router.navigate(['login']);
      }
    },
      (error) => {
        if (error.error.error != null) {
         this.error = error.error.error;
         console.log(error.error.error)
        }
      });
  }
}
