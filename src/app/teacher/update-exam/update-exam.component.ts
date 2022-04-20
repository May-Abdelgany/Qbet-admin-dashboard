import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.scss']
})
export class UpdateExamComponent implements OnInit {
  errorMessage: string = '';
  exam_id:any;
  ExamData:any;
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

    this.exam_id = localStorage.getItem('examId');
    this._ExamService.showData(this.exam_id).subscribe((response)=>{
      if(response.data!=null){
        this.ExamData=response.data;
        this.formExam.controls['name'].setValue(this.ExamData.name);
        this.formExam.controls['code'].setValue(this.ExamData.code);
        this.formExam.controls['number_of_question_tf'].setValue(this.ExamData.number_of_question_tf);
        this.formExam.controls['number_of_question_complete'].setValue(this.ExamData.number_of_question_complete);
        this.formExam.controls['number_of_question_static_mcq'].setValue(this.ExamData.number_of_question_static_mcq);
        this.formExam.controls['end_time'].setValue( this.ExamData.end_time);
        this.formExam.controls['time_of_exam'].setValue(this.ExamData.time_of_exam);
      }
    })
  }
  update(formQuestion:any){
    var data=formQuestion.value;
    this._ExamService.updateExam(data).subscribe((response)=>{
      if(response.data=='Record updated successfully!'){
        this._Router.navigate(['teacher/Exams']);
      }
    })
  }
}
