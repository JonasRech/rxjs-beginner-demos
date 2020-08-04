import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildOwnObservableComponent } from './build-own-observable.component';

const routes: Routes = [{ path: '', component: BuildOwnObservableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildOwnObservableRoutingModule { }
