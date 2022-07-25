import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {Post} from "../interfaces/post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';

  constructor(
    private http: HttpClient,
  ) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => console.log('fetched posts')),
      );
  }
}
