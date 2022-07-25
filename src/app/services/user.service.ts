import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';

  users$ = this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_ => console.log('fetched users')),
    );

  constructor(
    private http: HttpClient,
  ) { }
}
