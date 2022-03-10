import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private _HttpClient: HttpClient, private _AuthService: AuthService) {
  }
  adminId: any;
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  getAdmins(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/admins`, { headers: this.token() });
  }
  addAdmin(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/admins`, data, { headers: this.token() });
  }
  showAdmin():Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/admins/${this.adminId}`, { headers: this.token() });
  }
  editAdmin(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/admins/${this.adminId}`, data, {headers: this.token() });
  }
  deleteAdmin(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/admins/${this.adminId}`,{ headers: this.token() });
  }
}
