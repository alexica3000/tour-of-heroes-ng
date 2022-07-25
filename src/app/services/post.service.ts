import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, concatMap, map, merge, scan, shareReplay, Subject, tap} from "rxjs";
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
    }))),
    shareReplay(1),
  );

  private postSelectedSubject = new BehaviorSubject<number>(0);
  postSelectedAction$ = this.postSelectedSubject.asObservable();

  selectedPost$ = combineLatest([
    this.postsWithUsers$,
    this.postSelectedAction$
  ]).pipe(
    map(([posts, selectedPostId]) => posts.find(post => post.id === selectedPostId)),
);

  private postInsertedSubject = new Subject<Post>();
  postInsertAction$ = this.postInsertedSubject.asObservable();

  postsWithAdd$ = merge(
    this.postsWithUsers$,
    this.postInsertAction$.pipe(
      concatMap(newPost => this.http.post<Post>(this.postsUrl, newPost))
    )
  ).pipe(
    scan((acc, value) => (value instanceof Array) ? [...value] : [...acc, value], [] as Post[])
  );

  selectedPostChanged(selectedPostId: number): void {
    this.postSelectedSubject.next(selectedPostId);
  }

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  addPost(newPost?: Post) {
    newPost = newPost || this.fakePost();
    this.postInsertedSubject.next(newPost);
  }

  private fakePost(): Post {
    return {
      id: 50,
      userId: 2,
      title: 'ABC Post',
      body: 'Body Post test',
      userName: 'User Name',
    }
  }
}
