import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup = new FormGroup({
    "email": new FormControl(null, [Validators.required, Validators.email]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }
  forget(forgetForm: FormGroup) {
    this._AuthService.forget(forgetForm.value).subscribe((response) => {
      if (response.data == 'Email sent successfully!') {
        this._Router.navigate(['reset-password']);
      }
    });
  }
}
