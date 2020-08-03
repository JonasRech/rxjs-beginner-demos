import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamsTheRxjsWayComponent } from './streams-the-rxjs-way.component';

const routes: Routes = [{ path: '', component: StreamsTheRxjsWayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsTheRxjsWayRoutingModule { }
