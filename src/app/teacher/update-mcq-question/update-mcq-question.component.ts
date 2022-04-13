import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-update-mcq-question',
  templateUrl: './update-mcq-question.component.html',
  styleUrls: ['./update-mcq-question.component.scss']
})
export class UpdateMcqQuestionComponent implements OnInit {
  formQuestion: FormGroup = new FormGroup({
    question: new FormControl('', [Validators.required]),
    answer1: new FormControl('', [Validators.required]),
    answer2: new FormControl('', [Validators.required]),
    answer3: new FormControl('', [Validators.required]),
    correct_answer: new FormControl(null, [Validators.required]),
    degree: new FormControl(null, [Validators.required, Validators.min(1)]),
    time: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    display: new FormControl('static'),
    course_id: new FormControl(localStorage.getItem('courseId'))
  })
  errorMessage: string = '';
  question_id: any;
  questionData: any;
  constructor(private _QuestionsService: QuestionsService, private _Router: Router) { }

  ngOnInit(): void {
    this.question_id = localStorage.getItem('questionId');
    this._QuestionsService.showmcqQuestion(this.question_id).subscribe((response) => {
      if (response.data != null) {
        this.questionData = response.data;
        this.formQuestion.controls['question'].setValue(this.questionData.question);
        this.formQuestion.controls['answer1'].setValue(this.questionData.answer1);
        this.formQuestion.controls['answer2'].setValue(this.questionData.answer2);
        this.formQuestion.controls['answer3'].setValue(this.questionData.answer3);
        this.formQuestion.controls['correct_answer'].setValue(this.questionData.correct_answer);
        this.formQuestion.controls['degree'].setValue(this.questionData.degree);
        this.formQuestion.controls['status'].setValue(this.questionData.status);
        this.formQuestion.controls['time'].setValue(this.questionData.time);
      }
    });
  }
  edit(formQuestion: any) {
    var data = formQuestion.value;
    this._QuestionsService.updatemcqQuestion(data).subscribe((response) => {
      if (response.data == 'Record updated successfully!') {
        this._Router.navigate(['teacher/smcq-questions']);
      }
    })
  }

}
