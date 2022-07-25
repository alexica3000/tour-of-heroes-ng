import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import {RxjsTestComponent} from "./components/rxjs-test/rxjs-test.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: HeroDetailComponent},
  {path: 'rxjs', component: RxjsTestComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
