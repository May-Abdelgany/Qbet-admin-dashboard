import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  courseId: any;
  questionId: any;
  token() {
    let token = this._AuthService.token();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  token2() {
    let token = this._AuthService.token();
    const header = {
      'Authorization': `Bearer ${token}`
    };
    return header;
  }
  constructor(private _HttpClient: HttpClient, private _AuthService: AuthService) {
    this.courseId = localStorage.getItem('courseId');
    this.questionId = localStorage.getItem('questionId');
  }

  completeQuestions(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/coursequestion/complete/${this.courseId}`, { headers: this.token() });
  }
  uploadCompleteFile(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/import/complete`, data, { headers: this.token2() });
  }
  deleteCompleteQuestion(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/question/complete/${data}`, { headers: this.token() });
  }
  addcompleteQuestion(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/questions/complete`, data, { headers: this.token() });
  }
  showcompleteQuestion(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/question/complete/${data}`, { headers: this.token() });
  }
  updatecompleteQuestion(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/question/complete/${this.questionId}`, data, { headers: this.token() });
  }
  TFQuestions(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/coursequestion/tf/${this.courseId}`, { headers: this.token() });
  }
  uploadTfFile(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/import/tf`, data, { headers: this.token2() });
  }
  deleteTfQuestion(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/question/tf/${data}`, { headers: this.token() });
  }
  addTFQuestion(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/questions/tf`, data, { headers: this.token() });
  }
  showTFQuestion(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/question/tf/${data}`, { headers: this.token() });
  }
  updateTFQuestion(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/question/tf/${this.questionId}`, data, { headers: this.token() });
  }
  McqQuestions(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/coursequestion/mcq/${this.courseId}`, { headers: this.token() });
  }
  uploadmcqFile(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/import/mcq`, data, { headers: this.token2() });
  }
  deletemcqQuestion(data: any): Observable<any> {
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/question/Mcq/${data}`, { headers: this.token() });
  }
  addmcqQuestion(data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/api/questions/Mcq`, data, { headers: this.token() });
  }
  showmcqQuestion(data: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/question/Mcq/${data}`, { headers: this.token() });
  }
  updatemcqQuestion(data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/question/Mcq/${this.questionId}`, data, { headers: this.token() });
  }
}
