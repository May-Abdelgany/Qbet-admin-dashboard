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
    code: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]{5,20}$/)]),
    number_of_question_tf: new FormControl('', [Validators.required]),
    number_of_question_complete: new FormControl('', [Validators.required]),
    number_of_question_static_mcq: new FormControl('', [Validators.required]),
    number_of_question_dynamic_mcq: new FormControl(0),
    end_time: new FormControl('', [Validators.required]),
    time_of_exam: new FormControl('', [Validators.required]),
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
  }

}
