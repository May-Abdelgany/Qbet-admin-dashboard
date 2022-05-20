import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-complete-questions',
  templateUrl: './complete-questions.component.html',
  styleUrls: ['./complete-questions.component.scss']
})
export class CompleteQuestionsComponent implements OnInit {
  courseQuestions: any[] = [];
  file: any;
  formData:any;
  question_id:any;
  successMessage:any;
  constructor(private _QuestionsService: QuestionsService) { }

  ngOnInit(): void {
    this.showQuestions();
  }
  showQuestions() {
    this._QuestionsService.completeQuestions().subscribe((response) => {
      this.courseQuestions = response.data;
     setTimeout(() => {
      $('.alert').addClass('d-none');
     }, 3000);
    })
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  upload() {

    this.formData = new FormData();
    this.formData.append('file', this.file,this.file.name);
    console.log(this.formData.get('file'))
    var course_id=localStorage.getItem('courseId')
    this._QuestionsService.uploadCompleteFile(this.formData,course_id).subscribe((response) => {
      if (response.data!= null) {
        this.successMessage=response.data;
        $('.alert').removeClass('d-none');
        this.showQuestions();
      }
    });
  }
  getId(index:any){
    this.question_id=this.courseQuestions[index].id;
    localStorage.setItem('questionId',this.question_id)
  }
  Delete(){
    this._QuestionsService.deleteCompleteQuestion(this.question_id).subscribe((response)=>{
      if (response.data != null) {
        $('.exampleModal').modal('hide');
        this.successMessage=response.data;
        $('.alert').removeClass('d-none');
        this.showQuestions();
      }
    })
  }
}
