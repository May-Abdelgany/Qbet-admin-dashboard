import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminsComponent } from './components/admins/admins.component';

import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EnrollsComponent } from './components/enrolls/enrolls.component';
import { StudentsInCourseComponent } from './components/students-in-course/students-in-course.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SidebarComponent,
    AdminsComponent,
    AddAdminComponent,
    EditAdminComponent,
    TeachersComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    StudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    CoursesComponent,
    AddCourseComponent,
    EditCourseComponent,
    EnrollsComponent,
    StudentsInCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
