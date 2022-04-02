import { UpdateTFQuestionComponent } from './update-tfquestion/update-tfquestion.component';
import { UpdateCompleteQuestionComponent } from './update-complete-question/update-complete-question.component';
import { AddCompleteQuestionComponent } from './add-complete-question/add-complete-question.component';
import { TfQuestionsComponent } from './tf-questions/tf-questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CompleteQuestionsComponent } from './complete-questions/complete-questions.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { SmcqQuestionsComponent } from './smcq-questions/smcq-questions.component';
import { DmcqQuestionsComponent } from './dmcq-questions/dmcq-questions.component';
import { AddTFQuestionComponent } from './add-tfquestion/add-tfquestion.component';


const routes: Routes = [
  { path: "myCourses", canActivate: [AuthGuard], component:MyCoursesComponent},
  { path: "complete-questions", canActivate: [AuthGuard], component:CompleteQuestionsComponent},
  { path: "tf-questions", canActivate: [AuthGuard], component:TfQuestionsComponent},
  { path: "smcq-questions", canActivate: [AuthGuard], component:SmcqQuestionsComponent},
  { path: "dmcq-questions", canActivate: [AuthGuard], component:DmcqQuestionsComponent},
  { path: "addCompleteQuestion", canActivate: [AuthGuard], component:AddCompleteQuestionComponent},
  { path: "updateCompleteQuestion", canActivate: [AuthGuard], component:UpdateCompleteQuestionComponent},
  { path: "addTFQuestion", canActivate: [AuthGuard], component:AddTFQuestionComponent},
  { path: "updateTFQuestion", canActivate: [AuthGuard], component:UpdateTFQuestionComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
