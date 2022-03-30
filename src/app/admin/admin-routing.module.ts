import { TeacherInCourseComponent } from './teacher-in-course/teacher-in-course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminsComponent } from './admins/admins.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { StudentsComponent } from './students/students.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EnrollsComponent } from './enrolls/enrolls.component';
import { StudentsInCourseComponent } from './students-in-course/students-in-course.component';
import { EnrollsTeacherComponent } from './enrolls-teacher/enrolls-teacher.component';
const routes: Routes = [
  { path: "showAdmins", canActivate: [AuthGuard], component: AdminsComponent },
  { path: "showAdmins/addAdmin", canActivate: [AuthGuard], component: AddAdminComponent },
  { path: "showAdmins/editAdmin", canActivate: [AuthGuard], component: EditAdminComponent },
  { path: "showteachers", canActivate: [AuthGuard], component: TeachersComponent },
  { path: "showteachers/addTeacher", canActivate: [AuthGuard], component: AddTeacherComponent },
  { path: "showteachers/editTeacher", canActivate: [AuthGuard], component: EditTeacherComponent },
  { path: "showstudents", canActivate: [AuthGuard], component: StudentsComponent },
  { path: "showstudents/addStudent", canActivate: [AuthGuard], component: AddStudentComponent},
  { path: "showstudents/editStudent", canActivate: [AuthGuard], component: EditStudentComponent},
  { path: "showcourses", canActivate: [AuthGuard], component:CoursesComponent},
  { path: "showcourses/addCourse", canActivate: [AuthGuard], component: AddCourseComponent },
  { path: "showcourses/editCourse", canActivate: [AuthGuard], component:EditCourseComponent },
  { path: "enrolls/students", canActivate: [AuthGuard], component:EnrollsComponent},
  { path: "enrolls/teachers", canActivate: [AuthGuard], component:EnrollsTeacherComponent},
  { path: "courses/studentInCourse", canActivate: [AuthGuard], component:StudentsInCourseComponent},
  { path: "courses/teacherInCourse", canActivate: [AuthGuard], component:TeacherInCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
