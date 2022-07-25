import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(_ => console.log('fetched users')),
      )
  }
}
