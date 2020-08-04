import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imperative-design',
  template: `
    <p>
      <span>
        Imperative Design (Not recommended)
        <br />
        <a (click)="fetchItBaby()">Do the fetch</a>
        <br />
        <br />
        completed tasks:<br />
        {{ completedTasks?.length }}
        <br />
        <br />
        uncompleted tasks:<br />
        {{ uncompletedTasks?.length }}
      </span>
      <span [routerLink]="['/reactive-design']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class ImperativeDesignComponent implements OnInit {

  // Acutally in our application, this is the common used pattern, but not the recommended for flexibility and scalability.
  private _http$;

  public uncompletedTasks;
  public completedTasks;

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
    this._http$.subscribe((tasks) => {
      // does not scale well with heavy complexity
      this.completedTasks = tasks.filter(task => task.completed === true);
      this.uncompletedTasks = tasks.filter(task => task.completed === false);

      // do not nest rxjs calls together, chain them, othwerise its an antipattern
    });
  }

}
