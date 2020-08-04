import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-what-are-streams',
  template: `
    <p>
      <span>
      What are Streams?
      </span>
      <span [routerLink]="['/combine-multiple-streams']">Next Lesson >></span>
    </p>
  `,
  styles: [
  ]
})
export class WhatAreStreamsComponent implements OnInit, OnDestroy {

  private _interval;
  private _documentEvent = (e: MouseEvent) => {
      // this is a stream of clicks, multiple values
      console.log('mouse event', e);
    };

  constructor() { }

  // Understand, what are streams?

  ngOnInit(): void {
    document.addEventListener('click', this._documentEvent);

    let counter = 0;
    this._interval = setInterval(() => {
      // this is a stream of interval, multiple values
      counter++;
      console.log('_counter interval', counter);
    }, 1000);

    // similiar to a XHR request, stream of one value
    setTimeout(() => {
      console.log('timeout done');
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
    document.removeEventListener('click', this._documentEvent);
    console.log('destroyed');
  }

}
