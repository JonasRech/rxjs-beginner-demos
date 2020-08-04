import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImperativeDesignComponent } from './imperative-design.component';

const routes: Routes = [{ path: '', component: ImperativeDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImperativeDesignRoutingModule { }
