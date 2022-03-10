import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';
declare var $:any;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  allCourses:any[]=[];
  constructor(private _AuthService:AuthService,private _CourseService: CourseService) { }

  ngOnInit(): void {
    this.showAll();
  }
  showAll() {
    this._CourseService.getCourses().subscribe((response) => {
      if (response.data != null) {
        this.allCourses = response.data;
        console.log(response.data);
      }
    })
  }
  getId(index: number) {
    this._CourseService.courseId = this.allCourses[index].id;
    console.log( this._CourseService.courseId);
    return this._CourseService.courseId;
  }
  Delete() {
    this._CourseService.deleteCourse(this._CourseService.courseId).subscribe((response) => {
      if (response.data != null) {
        $('#exampleModal').modal('hide');
        this.allCourses = response.data;
        this.showAll();
      }
    })
  }

}
