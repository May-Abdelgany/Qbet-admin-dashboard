import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminsComponent } from './components/admins/admins.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: " ", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "admins", canActivate: [AuthGuard], component: AdminsComponent },
  { path: "admins/addAdmin", canActivate: [AuthGuard], component: AddAdminComponent },
  { path: "admins/editAdmin", canActivate: [AuthGuard], component: EditAdminComponent },
  { path: "teachers", canActivate: [AuthGuard], component: AdminsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
