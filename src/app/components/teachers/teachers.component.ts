import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';
declare var $:any;
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  allTeachers: any[] = [];
  teacherId: any;
  errorMessage:string="";
  constructor(private _AuthService:AuthService,private _TeacherService: TeacherService) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this._TeacherService.getTeachers().subscribe((response) => {
      if (response.data != null) {
        this.allTeachers = response.data;
        console.log(response.data);
      }
    })
  }
  getId(index: number) {
    this._TeacherService.teacherId = this.allTeachers[index].id;
    console.log( this._TeacherService.teacherId);
    return this._TeacherService.teacherId;
  }
  Delete() {
    this._TeacherService.deleteTeacher(this._TeacherService.teacherId).subscribe((response) => {
      if (response.data != null) {
        $('#exampleModal').modal('hide');
        this.allTeachers = response.data;
        this.showAll();
      }
    })
  }
}
