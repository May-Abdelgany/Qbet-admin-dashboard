import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-tf-questions',
  templateUrl: './tf-questions.component.html',
  styleUrls: ['./tf-questions.component.scss']
})
export class TfQuestionsComponent implements OnInit {
  courseQuestions: any[] = [];
  formData: any;
  file:any;
  successMessage: any;
  question_id:any;
  constructor(private _QuestionsService: QuestionsService) { }

  ngOnInit(): void {
    this.showQuestions();
  }
  showQuestions() {
    this._QuestionsService.TFQuestions().subscribe((response) => {
      this.courseQuestions = response.data;
      console.log(this.courseQuestions)
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
    this.formData.append('file', this.file, this.file.name);
    console.log(this.formData.get('file'))
    this._QuestionsService.uploadTfFile(this.formData).subscribe((response) => {
      if (response.data != null) {
        this.successMessage = response.data;
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
    this._QuestionsService.deleteTfQuestion(this.question_id).subscribe((response)=>{
      if (response.data != null) {
        $('.exampleModal').modal('hide');
        this.successMessage=response.data;
        $('.alert').removeClass('d-none');
        this.showQuestions();
      }
    })
  }
}
