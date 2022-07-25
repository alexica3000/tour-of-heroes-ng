import { Injectable } from '@angular/core';
import {combineLatest, map, tap} from "rxjs";
import {Post} from "../interfaces/post";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';

  posts$ = this.http.get<Post[]>(this.postsUrl)
    .pipe(
      tap(_ => console.log('fetched posts')),
    );

  postsWithUsers$ = combineLatest([
    this.posts$,
    this.userService.users$,
  ]).pipe(
    map(([posts, users]) => posts.map(post => ({
      ...post,
      userName: users.find(u => post.userId === u.id)?.name,
    })))
  );

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }
}
