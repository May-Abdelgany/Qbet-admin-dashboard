import { TestGuard } from './../guards/test.guard';
import { QuestionsComponent } from './components/questions/questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ExamComponent } from './components/exam/exam.component';
import { GradeComponent } from './components/grade/grade.component';
import { GradeGuard } from '../guards/grade.guard';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';

const routes: Routes = [
  { path: "exam", canActivate: [AuthGuard], component:ExamComponent},
  { path: "exam/questions", canActivate: [AuthGuard,TestGuard], component:QuestionsComponent},
  { path: "exam/examGrade", canActivate: [AuthGuard,GradeGuard], component:GradeComponent},
  { path: "myCourses", canActivate: [AuthGuard], component:MyCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
