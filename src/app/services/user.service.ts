import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';

  users$ = this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_ => console.log('fetched users')),
      shareReplay(1),
    );

  constructor(
    private http: HttpClient,
  ) { }
}
