import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ExamComponent } from './components/exam/exam.component';
import { QuestionsComponent } from './components/questions/questions.component';



@NgModule({
  declarations: [
    ExamComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
