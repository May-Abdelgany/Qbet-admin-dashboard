import { StudentsInCourseComponent } from './components/students-in-course/students-in-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminsComponent } from './components/admins/admins.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EnrollsComponent } from './components/enrolls/enrolls.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "admins", canActivate: [AuthGuard], component: AdminsComponent },
  { path: "admins/addAdmin", canActivate: [AuthGuard], component: AddAdminComponent },
  { path: "admins/editAdmin", canActivate: [AuthGuard], component: EditAdminComponent },
  { path: "teachers", canActivate: [AuthGuard], component: TeachersComponent },
  { path: "teachers/addTeacher", canActivate: [AuthGuard], component: AddTeacherComponent },
  { path: "teachers/editTeacher", canActivate: [AuthGuard], component: EditTeacherComponent },
  { path: "students", canActivate: [AuthGuard], component: StudentsComponent },
  { path: "students/addStudent", canActivate: [AuthGuard], component: AddStudentComponent},
  { path: "students/editStudent", canActivate: [AuthGuard], component: EditStudentComponent},
  { path: "courses", canActivate: [AuthGuard], component:CoursesComponent},
  { path: "courses/addCourse", canActivate: [AuthGuard], component: AddCourseComponent },
  { path: "courses/editCourse", canActivate: [AuthGuard], component:EditCourseComponent },
  { path: "enrolls", canActivate: [AuthGuard], component:EnrollsComponent},
  { path: "courses/studentInCourse", canActivate: [AuthGuard], component:StudentsInCourseComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
