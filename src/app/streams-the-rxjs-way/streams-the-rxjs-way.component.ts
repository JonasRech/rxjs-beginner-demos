import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, timer, fromEvent } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-streams-the-rxjs-way',
  template: `
    <p>
      <span>Streams the Rxjs way</span>
      <span [routerLink]="['/error-completion-subscription']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class StreamsTheRxjsWayComponent implements OnInit, OnDestroy {

  // traditional way to unsubscribe
  private _subscriptionInterval;
  private _subscriptionClick;
  private _subscripton;

  constructor() { }

  ngOnInit(): void {
    // declaration, not an instance of a stream (like a blueprint)
    // http://reactivex.io/documentation/operators/interval.html
    // http://reactivex.io/documentation/operators/timer.html
    // wait for 3000 ms (timeout), emit after every 1000 ms (interval) a new value
    const interval$: Observable<number> = timer(3000, 1000);

    // creation of a stream of values
    this._subscriptionInterval = interval$.subscribe((val: number) => console.log(`rxjs way - stream one: ${val}`));

    // document could be any HTMLElement
    const click$ = fromEvent(document, 'click');

    // creation of a stream of values
    this._subscriptionClick = click$.subscribe((mouseEvent: MouseEvent) => console.log('rxjs mouse event', mouseEvent));

    // praxis example -> combine them togehter like the example before, also do not forget to unsubscribe
    /*
      this._subscripton = click$
        .pipe(
          tap((e: MouseEvent) => console.log('document clicked', e)),
          switchMap(() => interval$)
        )
        .subscribe((e: number) => {
          console.log('start after 3000ms, this is a emitted value after 1000ms', e);
        });
     */

    // after that return to presentation
  }

  ngOnDestroy(): void {
    // do not forget to unsubscribe (SPA)
    this._subscriptionClick.unsubscribe();
    this._subscriptionInterval.unsubscribe();
    // this._subscripton.unsubscribe();
  }

}
