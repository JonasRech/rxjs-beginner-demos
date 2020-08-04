import { Component, OnInit } from '@angular/core';
import { Observable, noop, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-caching',
  template: `
    <p>
      <span>Caching<br /><a (click)="fetchItBaby()">Do the fetch</a></span>
      <span [routerLink]="['/imperative-design']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class CachingComponent implements OnInit {

  // Remembers the last emitted values, instead a subject does not remember
  private _cachedTasks$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  ngOnInit(): void {

    const http$ = Observable.create(observer => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });

    http$.subscribe((res) => this._cachedTasks$.next(res));
  }

  fetchItBaby() {
    // convert behaviourSubject to observable, the data producer is the behaviourSubject
    this._cachedTasks$.asObservable().subscribe(
      (tasks) => console.log('tasks', tasks),
      noop,
      () => console.log('tasks completed')
    )
  }

}
