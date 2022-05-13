import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  courseId: any;
  enrollId: any;
  constructor(private _HttpClient: HttpClient, private _AuthService: AuthService, private _CourseService: CourseService) {
    this.courseId = localStorage.getItem('courseId');
  }
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  getStudents(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/course/students/${this.courseId}`, { headers: this.token() });
  }
  EnrollId(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/enroll/getId`, data, { headers: this.token() });
  }
  DeleteEnroll(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/enroll/student/${data}`, { headers: this.token() });
  }
  EnrollTeacherId(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/enroll/getenrollId`, data, { headers: this.token() });
  }
  DeleteEnrollTeacher(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/enroll/teacher/${data}`, { headers: this.token() });
  }
}
