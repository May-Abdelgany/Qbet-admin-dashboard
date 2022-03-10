import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  decode: any = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    if (localStorage.getItem("user") != null) {
      this.data();
    }
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/login`, data);
  }
  data() {
    this.decode.next(localStorage.getItem("user"));
    return this.decode._value;
  }

  role() {
    return JSON.parse(this.data()).role;
  }
  token() {
    return JSON.parse(this.data()).token;
  }
}