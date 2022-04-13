import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
declare var $: any;
@Component({
  selector: 'app-smcq-questions',
  templateUrl: './smcq-questions.component.html',
  styleUrls: ['./smcq-questions.component.scss']
})
export class SmcqQuestionsComponent implements OnInit {
  courseQuestions: any[] = [];
  formData: any;
  file: any;
  successMessage: any;
  question_id: any;
  constructor(private _QuestionsService: QuestionsService) { }

  ngOnInit(): void {
    this.showQuestions();
  }
  showQuestions() {
    this._QuestionsService.McqQuestions().subscribe((response) => {
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
    this._QuestionsService.uploadmcqFile(this.formData).subscribe((response) => {
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
    this._QuestionsService.deletemcqQuestion(this.question_id).subscribe((response)=>{
      if (response.data != null) {
        $('.exampleModal').modal('hide');
        this.successMessage=response.data;
        $('.alert').removeClass('d-none');
        this.showQuestions();
      }
    })
  }
}
