import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {BehaviorSubject, combineLatest, map} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  users$ = this.userService.users$;
  private userSelectedSubject = new BehaviorSubject<number>(0);
  userSelectedAction$ = this.userSelectedSubject.asObservable();

  posts$ = combineLatest([
    this.postService.postsWithUsers$,
    this.userSelectedAction$
  ]).pipe(
    map(([posts, selectedUserId]) => posts.filter(post => selectedUserId ? post.userId === selectedUserId : true)),
  );

  selectedPost$ = this.postService.selectedPost$;

  constructor(
    private postService: PostService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onSelected(userId: string): void {
    this.userSelectedSubject.next(+userId);
  }

  onSelectedDetails(userId: number): void {
    this.postService.selectedPostChanged(userId);
  }
}
