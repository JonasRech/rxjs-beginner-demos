import { Component, OnInit } from '@angular/core';
import { Observable, noop } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  template: `
    <p>
      <span>Map Operator<br /><a (click)="fetchItBaby()">Do the fetch</a></span>
      <span [routerLink]="['/caching']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class MapOperatorComponent implements OnInit {

  private _taskTitles$;

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

    this._taskTitles$ = http$.pipe(
      map((res: any) => res.map((task) => task.title))
    )
  }

  fetchItBaby() {
    this._taskTitles$.subscribe(
      (tasks) => console.log('task titles', tasks),
      noop,
      () => console.log('task titles completed')
    )
  }

}
