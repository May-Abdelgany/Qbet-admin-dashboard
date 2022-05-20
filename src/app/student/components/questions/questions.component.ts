import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ExamService } from 'src/app/services/exam.service';
declare var $: any;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  start_time: any;
  end_time: any;
  allQuestions: any[] = [];
  next_questions: any;
  mcq_question: any;
  tf_question: any;
  complete_question: any;
  length: any;
  type: string = '';
  id: any;
  values: string = '';
  spellcheck: any;
  allCorrect: any[] = [];
  constructor(private _QuestionsService: QuestionsService, private _Router: Router, private _ExamService: ExamService) { }
  ngOnInit(): void {
    this.length = JSON.parse(localStorage.getItem("Exam_questions") || '{}').length;
    if (this.length != 0) {
      this.getQuestion();
    }
    this.time();
  }
  getQuestion() {
    this.allQuestions = JSON.parse(localStorage.getItem("Exam_questions") || '{}');
    if (this.allQuestions[0].t_f_id != null) {
      this._QuestionsService.showTFQuestion(this.allQuestions[0].t_f_id).subscribe((response) => {
        this.tf_question = response.data;
        this.complete_question = null;
        this.mcq_question = null;
        this.type = 'tf';
        this.id = this.tf_question.id;
      })
    }
    else if (this.allQuestions[0].complete_id != null) {
      this._QuestionsService.showcompleteQuestion(this.allQuestions[0].complete_id).subscribe((response) => {
        this.complete_question = response.data;
        this.tf_question = null;
        this.mcq_question = null;
        this.type = 'complete';
        this.id = this.complete_question.id;
      })
    }
    else if (this.allQuestions[0].smcq_id != null) {
      this._QuestionsService.showmcqQuestion(this.allQuestions[0].smcq_id).subscribe((response) => {
        this.mcq_question = response.data;
        this.tf_question = null;
        this.complete_question = null;
        this.type = 'mcq';
        this.id = this.mcq_question.id;
      })
    }
  }
  time() {
    var codeform = JSON.parse(localStorage.getItem('data') || '{}').code;
    this._ExamService.endtime(codeform).subscribe((res1) => {
      this.end_time = res1.data;
      this._ExamService.starttime(codeform).subscribe((res) => {
        this.start_time = res.data;
        var start = this.start_time.split(':');
        var end = this.end_time.split(':');
        var sec_now = Number(start[0]) * 60 * 60 + Number(start[1]) * 60 + Number(start[2]);
        var sec_end = Number(end[0]) * 60 * 60 + Number(end[1]) * 60 + Number(end[2]);
        var distance = sec_end - sec_now;
        var intervalid = setInterval(() => {
          if (distance > 0) {
            distance--;
            var hours = Math.floor(distance / (60 * 60));
            var minutes = Math.floor((distance % (60 * 60)) / 60);
            var seconds = Math.floor((distance % 60));
            $('.time').html(`<p class="fs-3 time">${hours}:${minutes}:${seconds}</p>`);
          }
          else {
            clearInterval(intervalid)
            this.finish();
          }
        }, 1000)
      })
    })
  }
  next() {
    if (this.type == 'complete') {
      var complete = $('#exampleFormControlTextarea6').val();
      var answer = {
        'exam_id': Number(localStorage.getItem('examId')),
        'student_id': JSON.parse(localStorage.getItem("user") || '{}').id,
        'type': this.type,
        'question_id': Number(this.id),
        'answer': complete.substring(1, complete.length - 1),
        'grade': 0
      }
    } else {
      var answer = {
        'exam_id': Number(localStorage.getItem('examId')),
        'student_id': JSON.parse(localStorage.getItem("user") || '{}').id,
        'type': this.type,
        'question_id': Number(this.id),
        'answer': $('input[name="answer"]:checked').val(),
        'grade': 0
      }
    }
    this._ExamService.saveAnswer(answer).subscribe((response) => {
      if (response.data == 'Record added successfully!') {
        this.allQuestions = JSON.parse(localStorage.getItem("Exam_questions") || '{}');
        this.allQuestions.shift();
        localStorage.setItem("Exam_questions", JSON.stringify(this.allQuestions))
        this.length = JSON.parse(localStorage.getItem("Exam_questions") || '{}').length
        if (this.length != 0) {
          complete = $('#exampleFormControlTextarea6').val(null);
          this.getQuestion();
        }
      }
    })
  }
  finish() {
    var finish = {
      'exam_id': Number(localStorage.getItem('examId')),
      'student_id': JSON.parse(localStorage.getItem("user") || '{}').id,
    }
    this._ExamService.finish(finish).subscribe((res) => {
      if (res.data != null) {
        localStorage.setItem('grade', JSON.stringify(res.data));
        var grade = {
          'exam_id': Number(localStorage.getItem('examId')),
          'student_id': JSON.parse(localStorage.getItem("user") || '{}').id,
          'degree': JSON.parse(localStorage.getItem("grade") || '{}').myGrade
        }
        this._ExamService.degree(grade).subscribe((response) => {
          if (response.data == 'Record added successfully!') {
            this._Router.navigate(['/student/exam/examGrade']);
            localStorage.removeItem('Exam_questions');
          }
        })
      }
      console.log(res)
    })
  }

  onKey(event: any) {
    var any = event.target.value;
    if (any.charAt(any.length - 1) == ')') {
      this.values = any.substring(1, any.length - 1);
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com',
          'X-RapidAPI-Key': '0f5d39647amshaa13a3484a5d61ep18c7dejsnfafbddfbc760'
        },
        body: `{"language":"enUS","fieldvalues":".${this.values}.","config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}`
      };
      fetch('https://jspell-checker.p.rapidapi.com/check', options)
        .then(response => response.json())
        .then(response => {
          this.spellcheck = response;
          for (let i = 0; i < this.spellcheck.elements[0].errors.length; i++) {
            this.allCorrect[i] = this.spellcheck.elements[0].errors[i].suggestions;
          }
        })
        .catch(err => console.error(err));
    }
    else if (any.charAt(any.length - 1) != ')') {
      this.values = '';
      this.allCorrect = [];
    }
  }
}
