import { EnrollService } from 'src/app/services/enroll.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  codeform: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });
  errorMessage: string = '';

  constructor(private _ExamService: ExamService,private _EnrollService:EnrollService, private _Router: Router) { }

  ngOnInit(): void {
  }
  doExam(codeform: FormGroup) {
    localStorage.setItem('data',JSON.stringify(codeform.value))
    this._ExamService.examId(codeform.value).subscribe((Res) => {
      var id = Res;
      localStorage.setItem('examId', id);
      var access = {
        'student_id': JSON.parse(localStorage.getItem('user') || '{}').id,
        'exam_id': id
      }
      this._EnrollService.enrolled_in(access).subscribe((response) => {
        if(response.data=='you enroll in course'){
      this._ExamService.doExam(codeform.value).subscribe((response) => {
        this._ExamService.access(access).subscribe(() => {
          localStorage.setItem('Exam_questions', JSON.stringify(response));
              this._Router.navigate(['student/exam/questions']);
            })
          })
        }
        },(error)=>{
          this.errorMessage = error.error.error;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        })
        }, (error) => {
          this.errorMessage = error.error.error;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        })
  }
}
