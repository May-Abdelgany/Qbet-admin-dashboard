import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _HttpClient: HttpClient, private _AuthService: AuthService) { }
  teacherId: any;
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  getTeachers(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/teachers`, { headers: this.token() });
  }
  addTeacher(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/teachers`, data, { headers: this.token() });
  }
  showTeacher():Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/teachers/${this.teacherId}`, { headers: this.token() });
  }
  editTeacher(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/teachers/${this.teacherId}`, data, {headers: this.token() });
  }
  deleteTeacher(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/teachers/${this.teacherId}`,{ headers: this.token() });
  }
}
