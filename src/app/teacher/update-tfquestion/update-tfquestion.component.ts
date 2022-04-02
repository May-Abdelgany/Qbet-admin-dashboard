import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-tfquestion',
  templateUrl: './update-tfquestion.component.html',
  styleUrls: ['./update-tfquestion.component.scss']
})
export class UpdateTFQuestionComponent implements OnInit {
  formQuestion: FormGroup = new FormGroup({
    question: new FormControl('', [Validators.required]),
    answer1: new FormControl('true'),
    answer2: new FormControl('false'),
    correct_answer: new FormControl('null', [Validators.required]),
    degree: new FormControl('null', [Validators.required, Validators.min(1)]),
    time: new FormControl('null', [Validators.required]),
    status: new FormControl('null', [Validators.required]),
    course_id: new FormControl(localStorage.getItem('courseId'))
  })
  errorMessage: string = '';
  question_id: any;
  questionData: any;
  constructor(private _QuestionsService: QuestionsService, private _Router: Router) { }

  ngOnInit(): void {
    this.question_id = localStorage.getItem('questionId');
    this._QuestionsService.showTFQuestion(this.question_id).subscribe((response) => {
      if (response.data != null) {
        this.questionData = response.data;
        this.formQuestion.controls['question'].setValue(this.questionData.question);
        this.formQuestion.controls['correct_answer'].setValue(this.questionData.correct_answer);
        this.formQuestion.controls['degree'].setValue(this.questionData.degree);
        this.formQuestion.controls['status'].setValue(this.questionData.status);
        this.formQuestion.controls['time'].setValue(this.questionData.time);
      }
    });
  }
  edit(formQuestion: any) {
    var data = formQuestion.value;
    this._QuestionsService.updateTFQuestion(data).subscribe((response) => {
      if (response.data == 'Record updated successfully!') {
        this._Router.navigate(['teacher/tf-questions']);
      }
    })
  }
}
