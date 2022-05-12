import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  exam_id: any;
  constructor(private _AuthService: AuthService, private _HttpClient: HttpClient) {
  }
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  Course_Exams(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/exams/${data}`, { headers: this.token() });
  }
  deleteExam(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/exam/${data}`, { headers: this.token() });
  }
  addExam(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/exam`, data, { headers: this.token() });
  }
  showData(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/exam/${data}`, { headers: this.token() });
  }
  updateExam(data: any): Observable<any> {
    this.exam_id = localStorage.getItem('examId');
    return this._HttpClient.put(`http://127.0.0.1:8000/api/exam/${this.exam_id}`, data, { headers: this.token() });
  }
  showGrades(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/degree`,data, { headers: this.token() });
  }
  exportGrades(): Observable<Blob> {
    this.exam_id = localStorage.getItem('examId');
    return this._HttpClient.get(`http://127.0.0.1:8000/api/export/degree/${this.exam_id}`, { headers: this.token(), responseType: 'blob' });
  }
  setQuestion(id: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/setQuestion/${id}`, { headers: this.token() });
  }
  existQuestions(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/existQuestions`, { headers: this.token() });
  }
  examMcq(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/getmcq/${data}`, { headers: this.token() });
  }
  examtf(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/gettf/${data}`, { headers: this.token() });
  }
  examcomplete(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/getcomplete/${data}`, { headers: this.token() });
  }

  doExam(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/startExam`, data, { headers: this.token() });
  }
  examId(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/exam_id`, data, { headers: this.token() });
  }
  endtime(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/endexam`, data, { headers: this.token() });
  }
  starttime(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/startexam`, data, { headers: this.token() });
  }
  access(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/access`, data, { headers: this.token() });
  }
  saveAnswer(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/setAnswer`, data, { headers: this.token() });
  }
  finish(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/finish`, data, { headers: this.token() });
  }
  degree(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/degrees`, data, { headers: this.token() });
  }
  student_id(data:any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/student_id/${data}`, { headers: this.token() });
  }
  do_exam(data:any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/exam/dostudent/${data}`, { headers: this.token() });
  }
  do_again(data:any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/doagain`,data, { headers: this.token() });
  }
}
