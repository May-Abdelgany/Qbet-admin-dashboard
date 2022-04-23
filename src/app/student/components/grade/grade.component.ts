import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit, OnDestroy {

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
  ngOnDestroy() {
    var user = localStorage.getItem('user');
    localStorage.clear();
    if (user != null) {
      localStorage.setItem('user', user);
    }
  }
}
