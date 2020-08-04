import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscStuffComponent } from './misc-stuff.component';

const routes: Routes = [{ path: '', component: MiscStuffComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscStuffRoutingModule { }
