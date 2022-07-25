import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, map, tap} from "rxjs";
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

  private postSelectedSubject = new BehaviorSubject<number>(0);
  postSelectedAction$ = this.postSelectedSubject.asObservable();

  selectedPost$ = combineLatest([
    this.postsWithUsers$,
    this.postSelectedAction$
  ]).pipe(
    map(([posts, selectedPostId]) => posts.find(post => post.id === selectedPostId)),
);

  selectedPostChanged(selectedPostId: number): void {
    this.postSelectedSubject.next(selectedPostId);
  }

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }
}
