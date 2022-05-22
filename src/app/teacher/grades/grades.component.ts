import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  allData: any[] = [];
  exam_id: any;
  allStudent: any[] = [];
  errorMessage: string = '';
  blob: any;
  request: any;
  constructor(private _ExamService: ExamService) { }

  ngOnInit(): void {
    this.exam_id = localStorage.getItem('examId');
    this._ExamService.student_id(this.exam_id).subscribe((res) => {
      if (res.length==0) {
        this.errorMessage = "don't have Grades until now in this exam";
      }
      else {
        this.allStudent.push(res);
        for (let i = 0; i < this.allStudent[0].length; i++) {
          this.request = {
            'exam_id': this.exam_id,
            'student_id': this.allStudent[0][i]
          }
          console.log(this.request)
          this._ExamService.showGrades(this.request).subscribe((response) => {
            this.allData.push(response);
          });
        }
      }
    })

  }
  getId(index: any) {
    localStorage.setItem('studentId', this.allData[index][0]);
  }
  export() {
    this._ExamService.exportGrades().subscribe((response) => {
      this.blob = new Blob([response], { type: 'application/pdf' });
      var downloadURL = window.URL.createObjectURL(response);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "Grades.xlsx";
      link.click();
    })
  }
}
