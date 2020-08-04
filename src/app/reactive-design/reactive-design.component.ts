import { Component, OnInit } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-design',
  template: `
    <p>
      <span>
        Reactive Design (RECOMMENDED)
        <br />
        <a (click)="fetchItBaby()">Do the fetch</a>
        <br />
        <br />
        completed tasks:<br />
        <!-- the angular async pipe takes care of the unsubscribe and handles observables easy --->
        {{ (completedTasks$ | async)?.length }}
        <br />
        <br />
        uncompleted tasks:<br />
        {{ (uncompletedTasks$ | async)?.length }}
      </span>
      <span [routerLink]="['/misc-stuff']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class ReactiveDesignComponent implements OnInit {

  private _http$;

  public completedTasks$;
  public uncompletedTasks$;

  constructor() { }

  ngOnInit(): void {

    this._http$ = Observable.create(observer => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }

  fetchItBaby() {
    // create two new streams, each derives from the base _http$ observable
    this.completedTasks$ = this._http$
      .pipe(
        map(
          (tasks: any) => tasks.filter(task => task.completed === true)
        )
      );

    this.uncompletedTasks$ = this._http$
      .pipe(
        map(
          (tasks: any) => tasks.filter(task => task.completed === false)
        )
      );
  }

  // One Problem, two backend calls instead of one, so use shareReplay
  // we have two different observables which dervices from the _http$ observable
  // each subscriptions is using the "blueprint" of _http$ and fires each subscription a XHR call

  // to prevent this, use the shareReplace operator, use one XHR for multiple derived streams
  // to understand share and shareReplay use this URL, its also recommended to take a look at commonly used rxjs operators ;-)
  // https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay
  /**
    .pipe(
      tap(() => console.log('http fired')),
      shareReplay()
    );
   */

}
