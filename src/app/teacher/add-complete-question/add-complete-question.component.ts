import { QuestionsService } from './../../services/questions.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-complete-question',
  templateUrl: './add-complete-question.component.html',
  styleUrls: ['./add-complete-question.component.scss']
})
export class AddCompleteQuestionComponent implements OnInit {
  formQuestion: FormGroup = new FormGroup({
    question: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required]),
    degree: new FormControl('null', [Validators.required, Validators.min(1)]),
    status: new FormControl('null', [Validators.required]),
    course_id: new FormControl(localStorage.getItem('courseId'))
  })
  errorMessage: string = '';
  constructor(private _QuestionsService: QuestionsService, private _Router: Router) { }

  ngOnInit(): void {

  }
  add(formQuestion: FormGroup) {
    this._QuestionsService.addcompleteQuestion(formQuestion.value).subscribe((Response) => {
      if (Response.data != null) {
        this._Router.navigate(['teacher/complete-questions']);
      }
    },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(this.errorMessage)
      })
  }
}
