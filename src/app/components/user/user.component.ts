import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { User } from "../../interfaces/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]> | undefined;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
