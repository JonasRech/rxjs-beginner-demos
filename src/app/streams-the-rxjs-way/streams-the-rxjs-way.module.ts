import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsTheRxjsWayRoutingModule } from './streams-the-rxjs-way-routing.module';
import { StreamsTheRxjsWayComponent } from './streams-the-rxjs-way.component';


@NgModule({
  declarations: [StreamsTheRxjsWayComponent],
  imports: [
    CommonModule,
    StreamsTheRxjsWayRoutingModule
  ]
})
export class StreamsTheRxjsWayModule { }
