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
  allQuestions: any[] = [];
  finshed_questions: any[] = [];
  mcq_question: any;
  tf_question: any;
  complete_question: any;
  finshed: any[] = [];
  question_number: number = 0;
  length: any;
  type: string = '';
  id: any;
  constructor(private _QuestionsService: QuestionsService, private _Router: Router, private _ExamService: ExamService) { }
  ngOnInit(): void {
    setInterval(() => { this.time() }, 1000);
    this.length = JSON.parse(localStorage.getItem("Exam_questions") || '{}').length;
    if (this.length != 0) {
      this.getQuestion();
    }
  }
  getQuestion() {
    this.allQuestions = JSON.parse(localStorage.getItem("Exam_questions") || '{}');
    this.question_number = this.finshed.length + 1;
    if (this.allQuestions[0].t_f_id != null) {
      this._QuestionsService.showTFQuestion(this.allQuestions[0].t_f_id).subscribe((response) => {
        this.tf_question = response.data;
        this.complete_question = null;
        this.mcq_question = null;
        this.type = 'tf';
        this.id = this.tf_question.id;
        console.log(this.tf_question)
      })
    }
    else if (this.allQuestions[0].complete_id != null) {
      this._QuestionsService.showcompleteQuestion(this.allQuestions[0].complete_id).subscribe((response) => {
        this.complete_question = response.data;
        this.tf_question = null;
        this.mcq_question = null;
        this.type = 'complete';
        this.id = this.complete_question.id;
        console.log(this.complete_question)
      })
    }
    else if (this.allQuestions[0].smcq_id != null) {
      this._QuestionsService.showmcqQuestion(this.allQuestions[0].smcq_id).subscribe((response) => {
        this.mcq_question = response.data;
        this.tf_question = null;
        this.complete_question = null;
        this.type = 'mcq';
        this.id = this.mcq_question.id;
        console.log(this.mcq_question)
      })
    }
  }

  time() {
    let get_distance = Number(localStorage.getItem('distance'));
    if (get_distance != null && get_distance != 0) {
      get_distance--;
      localStorage.setItem('distance', JSON.stringify(get_distance))
      var hours = Math.floor(get_distance / (60 * 60));
      var minutes = Math.floor((get_distance % (60 * 60)) / 60);
      var seconds = Math.floor((get_distance % 60));
      $('.time').html(`<p class="fs-3 time">${hours}:${minutes}:${seconds}</p>`);
    }
    else {
    this.finish();
    }
  }
  next() {
    if (this.type == 'complete') {
      var answer = {
        'exam_id': Number(localStorage.getItem('examId')),
        'student_id': JSON.parse(localStorage.getItem("user") || '{}').id,
        'type': this.type,
        'question_id': Number(this.id),
        'answer': $('#exampleFormControlTextarea6').val(),
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
    console.log(answer)
    this._ExamService.saveAnswer(answer).subscribe((response) => {
      if (response.data == 'Record added successfully!') {
        this.allQuestions = JSON.parse(localStorage.getItem("Exam_questions") || '{}');
        var deleted = this.allQuestions.shift();
        this.finshed.push(deleted)
        localStorage.setItem("Exam_questions", JSON.stringify(this.allQuestions))
        if (JSON.parse(localStorage.getItem("Exam_questions") || '{}').length == 0) {
          this.length = JSON.parse(localStorage.getItem("Exam_questions") || '{}').length;
        }
        else {
          console.log(this.allQuestions)
          this.getQuestion();
          console.log(answer);
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
            localStorage.removeItem('end_time');
            localStorage.removeItem('start_time');
            localStorage.removeItem('Exam_questions');
            localStorage.removeItem('distance');
          }
        })
      }
    })


  }
}
