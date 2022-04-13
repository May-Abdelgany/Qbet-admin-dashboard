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
  blob: any;
  constructor(private _ExamService: ExamService) { }

  ngOnInit(): void {
    this.exam_id = localStorage.getItem('examId');
    this._ExamService.showGrades(this.exam_id).subscribe((response) => {
      this.allData = response;
      this.allData  = this.allData.map(x => ({
        fname: x[0],
        lname: x[1],
        grade: x[2]
      }));
      console.log(this.allData);
    });
  }

  export(){
    this._ExamService.exportGrades().subscribe((response)=>{
      this.blob = new Blob([response], {type: 'application/pdf'});

      var downloadURL = window.URL.createObjectURL(response);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "Grades.xlsx";
      link.click();

    })
  }
}
