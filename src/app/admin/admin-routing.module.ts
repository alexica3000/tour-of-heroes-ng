import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AuthGuard} from "../auth/auth.guard";
import {LoginComponent} from "../auth/login/login.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'heroes', component: ManageHeroesComponent},
          {path: '', component: AdminDashboardComponent},
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
