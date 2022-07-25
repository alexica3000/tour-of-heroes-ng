import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "../interfaces/hero";
import { POSTS } from "../mocks/mock-posts";
import { HEROES } from "../mocks/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = HEROES;
    const posts = POSTS;

    return {heroes, posts};
  }

  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
