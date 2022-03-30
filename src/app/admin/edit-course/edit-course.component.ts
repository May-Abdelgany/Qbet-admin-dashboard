import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  course:any;
  errorMessage: string = "";
  constructor(private _CourseService: CourseService, private _Router: Router) { }
  editCourseForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(40), Validators.minLength(4)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(20)]),
  });
  ngOnInit(): void {
    this._CourseService.showCourse().subscribe((response) => {
      if (response.data != null) {
        this.course = response.data;
        console.log(response.data);
       this.editCourseForm.controls['title'].setValue(response.data.title);
        this.editCourseForm.controls['description'].setValue(response.data.description);
      }
    });
  }
  edit(editCourseForm:FormGroup){
    this._CourseService.editCourse(editCourseForm.value).subscribe((Response)=>{
      if(Response.data!=null){
         this._Router.navigate(['admin/showcourses']);
      }
    },
    (error)=>{
      this.errorMessage=error.error.error.error;
      console.log(this.errorMessage)
    })
  }

}
