import { timestamp } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
declare var $: any;
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  course_id: any;
  exam_id: any;
  allExams: any[] = [];
  successMessage: any;
  constructor(private _ExamService: ExamService) { }

  ngOnInit(): void {
    this.course_id = localStorage.getItem('courseId');
    this.showAll();
  }
  showAll() {
    this._ExamService.Course_Exams(this.course_id).subscribe((response) => {
      if (response.data != null) {
        this.allExams = response.data;
      }
    });
  }
  getId(index: any) {
    this.exam_id = this.allExams[index].id;
    localStorage.setItem('examId', this.exam_id);
  }
  Delete() {
    this._ExamService.deleteExam(this.exam_id).subscribe((response) => {
      if (response.data != null) {
        $('.exampleModal').modal('hide');
        this.successMessage = response.data;
        $('.alert').removeClass('d-none');
        this.showAll();
      }
    })
  }
  setQuestions(index: any) {
    this.exam_id = this.allExams[index].id;
    this._ExamService.setQuestion(this.exam_id).subscribe((Response) => {
      if (Response.data == 'Create exam successfully!') {
        this.successMessage = 'add question successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);
      }
    });
  }
}
