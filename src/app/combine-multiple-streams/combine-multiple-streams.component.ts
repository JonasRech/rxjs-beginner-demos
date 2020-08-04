import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-combine-multiple-streams',
  template: `
    <p>
      <span>
        Combine multiple Streams, common use case in JavaScript programs
      </span>
      <span [routerLink]="['/streams-the-rxjs-way']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class CombineMultipleStreamsComponent implements OnInit, OnDestroy {

  private _interval;
  private _documentEvent = (e: MouseEvent) => {
      // now remove the clickListener of document, otherwise we need to stash the intervals to remove them
      document.removeEventListener('click', this._documentEvent);
      // this is a stream of clicks, multiple values
      console.log('mouse event', e);

      // similiar to a XHR request, stream of one value
      setTimeout(() => {
        console.log('timeout done');

        let counter = 0;
        this._interval = setInterval(() => {
          // this is a stream of interval, multiple values
          counter++;
          console.log('counter interval', counter);
        }, 1000);
      }, 3000);
    }

  constructor() { }

  // As you can see, the common JavaScript callback, does not scale well

  ngOnInit(): void {
    document.addEventListener('click', this._documentEvent);
  }

  ngOnDestroy(): void {
    console.log('this.interval', this._interval);
    clearInterval(this._interval);
  }

}
