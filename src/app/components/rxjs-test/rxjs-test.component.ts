import { Component, OnInit } from '@angular/core';
import {from, of} from "rxjs";

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(2, 4, 6).subscribe(item => console.log(item));
    from(['a', 'b', 'c', 'd'])
      .subscribe({
        next: item => console.log(`resulting item ${item}`),
        error: err => console.log(`error occurring ${err}`),
        complete: () => console.log('complete')
      });
  }
}
