import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { HeroSearchComponent } from "./components/hero-search/hero-search.component";
import { RxjsTestComponent } from './components/rxjs-test/rxjs-test.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    RxjsTestComponent,
    PostsComponent,
    UserComponent,
    PostDetailComponent,
    FormExampleComponent,
    FormReactiveComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
