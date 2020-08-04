import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-misc-stuff',
  template: `
    <p>
      <span>
        Teardown Logic & Destroy$ Pattern
      </span>
      <span [routerLink]="['/finish']">(Kill the component)</span>
    </p>
  `,
  styles: [
  ]
})
export class MiscStuffComponent implements OnInit, OnDestroy {
  private _http$;
  // the destroy subject pattern, recommended to use
  private _destroy$: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
    // TEARDOWN LOGIC
    // TEARDOWN LOGIC

    // we need a way to clean ressources used by the observable
    const obs1$ = Observable.create(observer => {
      let counter = 0
      let id = setInterval(() => {
        counter++
        console.log(`obs1 Still active. Current value: ${counter}`)
        observer.next(counter)
      }, 700)
      setTimeout(() => observer.complete(), 2500)

      // return the teardown logic
      return () => {
        console.log('Teardown logic obs1')
        // clean those things up!
        clearInterval(id)
      }
    });

    const subscription = obs1$.subscribe();
    // subscription.unsubscribe();








    // DESTROY$ Pattern
    // DESTROY$ Pattern
    const obs2$ = Observable.create(observer => {
      let counter = 0
      let id = setInterval(() => {
        counter++
        console.log(`obs2 Still active. Current value: ${counter}`)
        observer.next(counter)
      }, 700)

      // return the teardown logic
      return () => {
        console.log('Teardown logic obs2')
        // clean those things up!
        clearInterval(id)
      }
    });

    // cancel automatically the subscription if the component gets destroyed
    obs2$.pipe(takeUntil(this._destroy$)).subscribe();
  }

  ngOnDestroy() {
    this._destroy$.next(true);
  }

}
