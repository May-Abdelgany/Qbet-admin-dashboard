import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
declare var $: any;
@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.scss']
})
export class ExamQuestionsComponent implements OnInit {
  examMcq: any[] = [];
  examtf: any[] = [];
  examcomplete: any[] = [];
  count: number=0;
  exam_id: any;
  constructor(private _ExamService: ExamService, private _QuestionsService: QuestionsService) { }

  ngOnInit(): void {
    this.exam_id = localStorage.getItem('examId');
    this.showMcq();
    this.showtf();
    this.showcomplete();
  }

  showMcq() {
    this._ExamService.examMcq(this.exam_id).subscribe((response) => {
      for (let i = 0; i < response.length; i++) {
        this._QuestionsService.showmcqQuestion(response[i].smcq_id).subscribe((res) => {
          if (res.data != null) {
            this.examMcq.push(res.data)
          }
        })
      }
      console.log(this.examMcq);
      this.count += response.length;
    })
  }
  showtf() {
    this._ExamService.examtf(this.exam_id).subscribe((response) => {

      for (let i = 0; i < response.length; i++) {
        this._QuestionsService.showTFQuestion(response[i].t_f_id).subscribe((res) => {
          if (res.data != null) {
            this.examtf.push(res.data)
          }
        })
      }
      console.log(this.examtf);
      this.count+=response.length;
    })
  }
  showcomplete() {
    this._ExamService.examcomplete(this.exam_id).subscribe((response) => {

      for (let i = 0; i < response.length; i++) {
        this._QuestionsService.showcompleteQuestion(response[i].complete_id).subscribe((res) => {
          if (res.data != null) {
            this.examcomplete.push(res.data);
          }
        })
      }
      console.log(this.examcomplete);
      this.count+=response.length;
    })
  }
}
