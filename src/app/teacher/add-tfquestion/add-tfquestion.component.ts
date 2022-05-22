import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-add-tfquestion',
  templateUrl: './add-tfquestion.component.html',
  styleUrls: ['./add-tfquestion.component.scss']
})
export class AddTFQuestionComponent implements OnInit {
  formQuestion: FormGroup = new FormGroup({
    question: new FormControl('', [Validators.required]),
    answer1: new FormControl('true'),
    answer2: new FormControl('false'),
    correct_answer: new FormControl('null', [Validators.required]),
    degree: new FormControl('null', [Validators.required, Validators.min(1)]),
    status: new FormControl('null', [Validators.required]),
    course_id: new FormControl(localStorage.getItem('courseId'))
  })
  errorMessage: string = '';
  constructor(private _QuestionsService: QuestionsService, private _Router: Router) { }

  ngOnInit(): void {
  }
  add(formQuestion: any) {
    this._QuestionsService.addTFQuestion(formQuestion.value).subscribe((Response) => {
      if (Response.data != null) {
        this._Router.navigate(['teacher/tf-questions']);
      }
    },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(this.errorMessage)
      })
  }
}
