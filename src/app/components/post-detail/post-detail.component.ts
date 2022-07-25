import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {

  post$ = this.postService.selectedPost$;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
  }
}
