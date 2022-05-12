import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-student-do-exam',
  templateUrl: './student-do-exam.component.html',
  styleUrls: ['./student-do-exam.component.scss']
})
export class StudentDoExamComponent implements OnInit {
  allStudents: any[] = [];
  id: any;
  errorMessage: any;
  constructor(private _AuthService: AuthService, private _ExamService: ExamService) { }

  ngOnInit(): void {
    this.show();
  }
  show() {
    this.id = localStorage.getItem('examId');
    this._ExamService.do_exam(this.id).subscribe((response) => {
      if (response.data != null) {
        this.allStudents = response.data;
        console.log(this.allStudents)
      }
    },
      (error) => {
        if (error.error.message != null) {
          this.errorMessage = "don't have any student do this exam";
        }
      })
  }
  doAgain(index: any) {
    var data = { user_id: this.allStudents[index][0].id, exam_id: this.id }
    this._ExamService.do_again(data).subscribe((response) => {
      if (response.data == 'Record deleted successfully!') {
        this.show();
      }
    })
  }
}
