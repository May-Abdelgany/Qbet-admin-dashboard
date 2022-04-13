import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-add-mcq-question',
  templateUrl: './add-mcq-question.component.html',
  styleUrls: ['./add-mcq-question.component.scss']
})
export class AddMcqQuestionComponent implements OnInit {
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
  constructor(private _QuestionsService: QuestionsService, private _Router: Router) { }

  ngOnInit(): void {
  }
  add(formQuestion: any) {
    this._QuestionsService.addmcqQuestion(formQuestion.value).subscribe((Response) => {
      if (Response.data != null) {
        this._Router.navigate(['teacher/smcq-questions']);
      }
    },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(this.errorMessage)
      })
  }
}
