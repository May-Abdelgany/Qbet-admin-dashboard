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

    this.exam_id = localStorage.getItem('examId');
    this._ExamService.showData(this.exam_id).subscribe((response)=>{
      if(response.data!=null){
        this.ExamData=response.data;
        this.formExam.controls['name'].setValue(this.ExamData.name);
        this.formExam.controls['code'].setValue(this.ExamData.code);
        this.formExam.controls['number_of_question_tf_easy'].setValue(this.ExamData.number_of_question_tf_easy);
        this.formExam.controls['number_of_question_tf_medium'].setValue(this.ExamData.number_of_question_tf_medium);
        this.formExam.controls['number_of_question_tf_difficult'].setValue(this.ExamData.number_of_question_tf_difficult);
        this.formExam.controls['number_of_question_complete_easy'].setValue(this.ExamData.number_of_question_complete_easy);
        this.formExam.controls['number_of_question_complete_medium'].setValue(this.ExamData.number_of_question_complete_medium);
        this.formExam.controls['number_of_question_complete_difficult'].setValue(this.ExamData.number_of_question_complete_difficult);
        this.formExam.controls['number_of_question_static_mcq_easy'].setValue(this.ExamData.number_of_question_static_mcq_easy);
        this.formExam.controls['number_of_question_static_mcq_medium'].setValue(this.ExamData.number_of_question_static_mcq_medium);
        this.formExam.controls['number_of_question_static_mcq_difficult'].setValue(this.ExamData.number_of_question_static_mcq_difficult);
        this.formExam.controls['date'].setValue( this.ExamData.date);
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
