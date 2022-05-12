import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  allstudents: any[] = [];
  id: any;
  all: any[] = [];
  constructor(private _AuthService: AuthService, private _CourseService: CourseService) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.id = localStorage.getItem('courseId');
    this._CourseService.studentInCourse(this.id).subscribe((response) => {
      if (response.data != null) {
        this.allstudents = response.data;
        /*for (let i = 0; i < this.allstudents.length; i++) {
          var obj = { ...this.allstudents[i] }
          this.all.push(obj)
        }*/
        console.log(this.allstudents);
      }
    })
  }
}
