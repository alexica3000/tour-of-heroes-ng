import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, interval, of, Subscription} from "rxjs";

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit, OnDestroy {
  intervalSubscription$: Subscription;
  currentNumber: number = 0;

  constructor() {
    this.intervalSubscription$ = new Subscription();
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
  }

  ngOnDestroy() {
    this.intervalSubscription$.unsubscribe();
  }
}
