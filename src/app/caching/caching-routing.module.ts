import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CachingComponent } from './caching.component';

const routes: Routes = [{ path: '', component: CachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CachingRoutingModule { }
