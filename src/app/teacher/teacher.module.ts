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
import { UpdateCompleteQuestionComponent } from './update-complete-question/update-complete-question.component';
import { AddTFQuestionComponent } from './add-tfquestion/add-tfquestion.component';
import { UpdateTFQuestionComponent } from './update-tfquestion/update-tfquestion.component';
import { AddMcqQuestionComponent } from './add-mcq-question/add-mcq-question.component';
import { UpdateMcqQuestionComponent } from './update-mcq-question/update-mcq-question.component';
import { ExamsComponent } from './exams/exams.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { GradesComponent } from './grades/grades.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';


@NgModule({
  declarations: [
    MyCoursesComponent,
    CompleteQuestionsComponent,
    TfQuestionsComponent,
    SmcqQuestionsComponent,
    DmcqQuestionsComponent,
    AddCompleteQuestionComponent,
    UpdateCompleteQuestionComponent,
    AddTFQuestionComponent,
    UpdateTFQuestionComponent,
    AddMcqQuestionComponent,
    UpdateMcqQuestionComponent,
    ExamsComponent,
    AddExamComponent,
    UpdateExamComponent,
    GradesComponent,
    ExamQuestionsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
