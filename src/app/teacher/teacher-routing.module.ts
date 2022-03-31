import { AddCompleteQuestionComponent } from './add-complete-question/add-complete-question.component';
import { TfQuestionsComponent } from './tf-questions/tf-questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CompleteQuestionsComponent } from './complete-questions/complete-questions.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { SmcqQuestionsComponent } from './smcq-questions/smcq-questions.component';
import { DmcqQuestionsComponent } from './dmcq-questions/dmcq-questions.component';


const routes: Routes = [
  { path: "myCourses", canActivate: [AuthGuard], component:MyCoursesComponent},
  { path: "complete-questions", canActivate: [AuthGuard], component:CompleteQuestionsComponent},
  { path: "tf-questions", canActivate: [AuthGuard], component:TfQuestionsComponent},
  { path: "smcq-questions", canActivate: [AuthGuard], component:SmcqQuestionsComponent},
  { path: "dmcq-questions", canActivate: [AuthGuard], component:DmcqQuestionsComponent},
  { path: "addCompleteQuestion", canActivate: [AuthGuard], component:AddCompleteQuestionComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
