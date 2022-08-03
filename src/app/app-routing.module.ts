import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import {RxjsTestComponent} from "./components/rxjs-test/rxjs-test.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UserComponent} from "./components/user/user.component";
import {FormExampleComponent} from "./components/form-example/form-example.component";
import {FormReactiveComponent} from "./components/form-reactive/form-reactive.component";
import {CountdownParentComponent} from "./components/countdown-parent/countdown-parent.component";
import {CountdownParentVcComponent} from "./components/countdown-parent-vc/countdown-parent-vc.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AgComponent} from "./components/ag/ag.component";
import {AgUniversitiesComponent} from "./components/ag-universities/ag-universities.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: HeroDetailComponent},
  {path: 'rxjs', component: RxjsTestComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UserComponent},
  {path: 'form-example', component: FormExampleComponent},
  {path: 'form-reactive', component: FormReactiveComponent},
  {path: 'countdown-timer', component: CountdownParentComponent},
  {path: 'countdown-time-vc', component: CountdownParentVcComponent},
  {path: 'ag', component: AgComponent},
  {path: 'ag-univ', component: AgUniversitiesComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
