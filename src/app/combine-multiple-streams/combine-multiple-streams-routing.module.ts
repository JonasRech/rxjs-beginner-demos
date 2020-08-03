import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombineMultipleStreamsComponent } from './combine-multiple-streams.component';

const routes: Routes = [{ path: '', component: CombineMultipleStreamsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombineMultipleStreamsRoutingModule { }
