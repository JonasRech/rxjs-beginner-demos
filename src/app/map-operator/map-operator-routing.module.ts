import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapOperatorComponent } from './map-operator.component';

const routes: Routes = [{ path: '', component: MapOperatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapOperatorRoutingModule { }
