import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CompleteQuestionsComponent } from './complete-questions/complete-questions.component';
import { TfQuestionsComponent } from './tf-questions/tf-questions.component';
import { SmcqQuestionsComponent } from './smcq-questions/smcq-questions.component';
import { DmcqQuestionsComponent } from './dmcq-questions/dmcq-questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCompleteQuestionComponent } from './add-complete-question/add-complete-question.component';


@NgModule({
  declarations: [
    MyCoursesComponent,
    CompleteQuestionsComponent,
    TfQuestionsComponent,
    SmcqQuestionsComponent,
    DmcqQuestionsComponent,
    AddCompleteQuestionComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
