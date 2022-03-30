import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AdminsComponent } from './admins/admins.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EnrollsComponent } from './enrolls/enrolls.component';
import { StudentsInCourseComponent } from './students-in-course/students-in-course.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EnrollsTeacherComponent } from './enrolls-teacher/enrolls-teacher.component';
import { TeacherInCourseComponent } from './teacher-in-course/teacher-in-course.component';
@NgModule({
  declarations: [
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
    StudentsInCourseComponent,
    EnrollsTeacherComponent,
    TeacherInCourseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
