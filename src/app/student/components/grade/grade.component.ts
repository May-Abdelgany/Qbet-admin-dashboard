import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  constructor(private _Router: Router) { }
  $allgrade: any;

  ngOnInit(): void {
    this.$allgrade = JSON.parse(localStorage.getItem('grade') || '{}');
  }
  home() {
    this._Router.navigate(['/home']);
    localStorage.removeItem('grade');
    localStorage.removeItem('examId');
  }
}
