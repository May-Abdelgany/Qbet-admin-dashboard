import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {
  errorMessage: string = '';
  formExam: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]),
    number_of_question_tf_easy: new FormControl('', [Validators.required]),
    number_of_question_tf_medium: new FormControl('', [Validators.required]),
    number_of_question_tf_difficult: new FormControl('', [Validators.required]),
    number_of_question_complete_easy: new FormControl('', [Validators.required]),
    number_of_question_complete_medium: new FormControl('', [Validators.required]),
    number_of_question_complete_difficult: new FormControl('', [Validators.required]),
    number_of_question_static_mcq_easy: new FormControl('', [Validators.required]),
    number_of_question_static_mcq_medium: new FormControl('', [Validators.required]),
    number_of_question_static_mcq_difficult: new FormControl('', [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    end_time: new FormControl(null, [Validators.required]),
    time_of_exam: new FormControl(null, [Validators.required]),
    course_id: new FormControl(localStorage.getItem('courseId'))
  })
  constructor(private _ExamService: ExamService, private _Router: Router) { }

  ngOnInit(): void {
  }
  add(formExam: FormGroup) {
    this._ExamService.addExam(formExam.value).subscribe((Response) => {
      if (Response!= null) {
        this._Router.navigate(['teacher/Exams']);
      }
    },
      (error) => {
        this.errorMessage ='other exam take this code please chose other code';
      })
    console.log(formExam.value)
  }

}
