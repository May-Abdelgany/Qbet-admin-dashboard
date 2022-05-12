import { Component, OnInit, OnDestroy } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
declare var $: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor(private _DetailsService: DetailsService) { }
  request: any;
  type: any[] = [];
  question: any[] = [];
  correct_answer: any[] = [];
  grade: any[] = [];
  your_answer: any[] = [];
  your_grade: any[] = [];
  all: any[] = [];
  data: any[] = [];
  row: any[] = [];
  ngOnInit(): void {
    this.request = {
      'exam_id': localStorage.getItem('examId'),
      'student_id': localStorage.getItem('studentId')
    }
    this._DetailsService.details(this.request).subscribe((response) => {
      if (response.data != null) {
        this.all.push(response.data);
        this.all = this.all[0];
        console.log(this.all[0].length)
        for (let i = 0; i < this.all[0].length; i++) {
          for (let j = 0; j < this.all.length; j++) {
            this.data.push(this.all[j][i]);
          }
          this.row.push(this.data)
          this.data = [];
        }
console.log(this.row)
      }
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem('studentId');
  }
}
