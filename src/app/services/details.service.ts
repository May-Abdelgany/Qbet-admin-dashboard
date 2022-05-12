import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _AuthService:AuthService,private _HttpClient:HttpClient) { }
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  details(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/answers/details`, data, { headers: this.token() });
  }
}
