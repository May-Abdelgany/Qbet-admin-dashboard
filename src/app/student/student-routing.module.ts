import { QuestionsComponent } from './components/questions/questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ExamComponent } from './components/exam/exam.component';

const routes: Routes = [
  { path: "exam", canActivate: [AuthGuard], component:ExamComponent},
  { path: "exam/questions", canActivate: [AuthGuard], component:QuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
