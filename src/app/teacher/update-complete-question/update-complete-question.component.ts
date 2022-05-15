import { Router } from '@angular/router';
import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-complete-question',
  templateUrl: './update-complete-question.component.html',
  styleUrls: ['./update-complete-question.component.scss']
})
export class UpdateCompleteQuestionComponent implements OnInit {
  question_id: any;
  questionData:any;
  constructor(private _QuestionsService:QuestionsService,private _Router:Router) { }
  formQuestion:FormGroup=new FormGroup({
    question:new FormControl('',[Validators.required]),
    answer:new FormControl('',[Validators.required]),
    degree:new FormControl('null',[Validators.required,Validators.min(1)]),
    time:new FormControl('null',[Validators.required]),
    status:new FormControl('null',[Validators.required]),
    course_id:new FormControl(localStorage.getItem('courseId'))
    })
  ngOnInit(): void {
    this.question_id = localStorage.getItem('questionId');
    this._QuestionsService.showcompleteQuestion(this.question_id).subscribe((response)=>{
      if(response.data!=null){
        this.questionData=response.data;
        this.formQuestion.controls['question'].setValue( this.questionData.question);
        this.formQuestion.controls['answer'].setValue( this.questionData.answer);
        this.formQuestion.controls['degree'].setValue( this.questionData.degree);
        this.formQuestion.controls['status'].setValue( this.questionData.status);
        this.formQuestion.controls['time'].setValue( this.questionData.time);
      }
    })
  }
  edit(formQuestion:any){
    var data=formQuestion.value;
    this._QuestionsService.updatecompleteQuestion(data).subscribe((response)=>{
      if(response.data=='Record updated successfully!'){
        this._Router.navigate(['teacher/complete-questions']);
      }
    })
  }
}
