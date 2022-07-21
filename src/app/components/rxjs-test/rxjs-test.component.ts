import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, fromEvent, interval, map, of, Subscription, take, tap} from "rxjs";

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit, OnDestroy {
  private intervalSubscription$: Subscription;
  private positionsSubscription$: Subscription;
  public currentNumber: number = 0;

  constructor() {
    this.intervalSubscription$ = new Subscription();
    this.positionsSubscription$ = new Subscription();
  }

  ngOnInit(): void {
    of(2, 4, 6).subscribe(item => console.log(`of .. ${item}`));

    from(['a', 'b', 'c', 'd'])
      .subscribe({
        next: item => console.log(`from .. ${item}`),
        error: err => console.log(`error occurring ${err}`),
        complete: () => console.log('complete')
      });

    this.intervalSubscription$ = interval(3000).subscribe(item => {
      this.currentNumber = item;
      console.log(`interval .. ${item}`);
    });

    of(3, 6, 9)
      .pipe(
        map(item => item * 2),
      )
      .subscribe(item => console.log(item));

    this.positionsSubscription$ = fromEvent<PointerEvent>(document, 'click')
    .pipe(
      map(ev => [ev.clientX, ev.clientY]),
      tap(ev => console.log(`clicks: x: ${ev[0]}, y: ${ev[1]}`))
    )
      .subscribe(clicks => this.logClicksPositions(clicks));
  }

  ngOnDestroy() {
    this.intervalSubscription$.unsubscribe();
    this.positionsSubscription$.unsubscribe();
  }

  logClicksPositions(clicks: number[]): void {
    let [x, y] = clicks;
    console.log(`x: ${x}, y: ${y}`)
  }
}
