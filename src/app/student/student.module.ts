import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ExamComponent } from './components/exam/exam.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { GradeComponent } from './components/grade/grade.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';



@NgModule({
  declarations: [
    ExamComponent,
    QuestionsComponent,
    GradeComponent,
    MyCoursesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
