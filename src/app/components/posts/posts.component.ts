import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Observable} from "rxjs";
import {Post} from "../../interfaces/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
