import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Observable, Subscription} from "rxjs";
import {Post} from "../../interfaces/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  sub!: Subscription;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.sub = this.postService.getPosts()
      .subscribe({
        next: posts => this.posts = posts,
        error: err => console.log(err),
      });
  }
}
