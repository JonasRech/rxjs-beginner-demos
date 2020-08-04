import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-build-own-observable',
  template: `
    <p>
      <span>Build own Observable<br /><a (click)="fetchItBaby()">Do the fetch</a></span>
      <span [routerLink]="['/map-operator']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class BuildOwnObservableComponent implements OnInit {
  private _http$;

  constructor() { }

  fetchItBaby() {
    // lets fire the cold observable
    this._http$.subscribe(
      (todos) => console.log(todos),
      () => {},
      () => console.log('complete')
    );
    // no unsubscribe is needed, because the observable is completed
  }

  ngOnInit(): void {
    // also a example for a COLD observable, nothing is gonna happen until we subscribe to it
    this._http$ = Observable.create(observer => {
      // use the native fetch api
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(body => {
          // there will be no other values, so complete the observable, respect the observable contract (complete or error out)
          observer.next(body);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });

    // the benefit of this conversion from promise to observable is
    // you can use the rxjs operators and combine this stream with other streams
    // one format makes it much easier.

    // Example of a HOT Observable
    // excellent post about this topic -> https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
    const obs$ = fromEvent(document, 'click')
      .pipe(map((event: any) => ({ clientX: event.clientX, clientY: event.clientY })));
    // To transform a HOT Observable into a cold, the observable has to becombe the data producer
    const obs = () => fromEvent(document, 'click')
      .pipe(map((event: any) => ({ clientX: event.clientX, clientY: event.clientY })));
  }

}
