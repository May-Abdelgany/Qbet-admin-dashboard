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

  constructor(private _ExamService: ExamService, private _Router: Router) { }

  ngOnInit(): void {

  }
  distance() {
    var now = localStorage.getItem('start_time');
    var start = now?.split(':');
    var end = localStorage.getItem('end_time');
    var end_array = end?.split(':');
    if (end_array != null && start != null) {
      var sec_now = Number(start[0]) * 60 * 60 + Number(start[1]) * 60 + Number(start[2]);
      var sec_end = Number(end_array[0]) * 60 * 60 + Number(end_array[1]) * 60 + Number(end_array[2]);
      var distance = sec_end - sec_now;
      localStorage.setItem('distance', JSON.stringify(distance));
    }
  }
  doExam(codeform: FormGroup) {
    this._ExamService.examId(codeform.value).subscribe((Res) => {
      localStorage.setItem('examId', Res);
    })
    this._ExamService.doExam(codeform.value).subscribe((response) => {
      localStorage.setItem('Exam_questions', JSON.stringify(response));
      this._ExamService.endtime(codeform.value).subscribe((res) => {
        localStorage.setItem('end_time', res.data);
      })
      this._ExamService.starttime(codeform.value).subscribe((res) => {
        localStorage.setItem('start_time', res.data);
        this.distance();
        this._Router.navigate(['student/exam/questions']);
      })
    }, (error) => {
      this.errorMessage = error.error.error;
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    })
  }
}
