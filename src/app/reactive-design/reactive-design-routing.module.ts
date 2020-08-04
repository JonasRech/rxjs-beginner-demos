import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveDesignComponent } from './reactive-design.component';

const routes: Routes = [{ path: '', component: ReactiveDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDesignRoutingModule { }
