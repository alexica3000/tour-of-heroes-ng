import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from "./admin/admin.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageHeroesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
