import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatAreStreamsComponent } from './what-are-streams.component';

const routes: Routes = [{ path: '', component: WhatAreStreamsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatAreStreamsRoutingModule { }
