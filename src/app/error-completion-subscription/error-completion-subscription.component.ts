import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-error-completion-subscription',
  template: `
    <p>
      error-completion-subscription works!
    </p>
  `,
  styles: [
  ]
})
export class ErrorCompletionSubscriptionComponent implements OnInit, OnDestroy {
  private _subscriptionInterval: Subscription;

  constructor() { }

  ngOnInit(): void {

    // the blueprint
    const interval$: Observable<number> = timer(3000, 1000);
    // creation of a stream of values
    this._subscriptionInterval = interval$.subscribe(
      // the event stream with values
      (val: number) => console.log(`stream one: ${val}`),
      // callback of error
      // if error gets fired, completion is never called & vice versa
      (error) => console.log(`error: ${error}`),
      // callback of completion
      () => {}

      // The Observable contract errors out, or completes, on of these functions are called
    );
  }

  ngOnDestroy(): void {
    this._subscriptionInterval.unsubscribe();
  }

}
