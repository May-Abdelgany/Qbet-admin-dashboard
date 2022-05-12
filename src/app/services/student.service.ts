import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private _HttpClient: HttpClient, private _AuthService: AuthService) { }
  studentId: any;
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  getStudents(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/students`, { headers: this.token() });
  }
  addStudent(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/students`, data, { headers: this.token() });
  }
  showStudent():Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/students/${this.studentId}`, { headers: this.token() });
  }
  editStudent(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/students/${this.studentId}`, data, {headers: this.token() });
  }
  deleteStudent(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/students/${this.studentId}`,{ headers: this.token() });
  }
  Get_studentId(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/student/${this.studentId}`, { headers: this.token() });
  }
  enrollStudent(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/enroll/student`, data, { headers: this.token() });
  }
  Get_Id(data:any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/student/${data}`, { headers: this.token() });
  }
}
