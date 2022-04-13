import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseId: any;
  constructor(private _HttpClient: HttpClient, private _AuthService: AuthService) {
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

  getCourses(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/courses`, { headers: this.token() });
  }
  addCourse(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/courses`, data, { headers: this.token() });
  }
  showCourse(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/courses/${this.courseId}`, { headers: this.token() });
  }
  editCourse(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/courses/${this.courseId}`, data, { headers: this.token() });
  }
  deleteCourse(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/courses/${this.courseId}`, { headers: this.token() });
  }
  getStudents(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/course/students/${this.courseId}`, { headers: this.token() });
  }
  getTeachers(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/course/teachers/${this.courseId}`, { headers: this.token() });
  }

  getMyCourses(data:any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/teacher/myCourses/${data}`, { headers: this.token() });
  }
  showMyCourses(data:any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/courses/${data}`, { headers: this.token() });
  }
}
