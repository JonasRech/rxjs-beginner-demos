import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorCompletionSubscriptionComponent } from './error-completion-subscription.component';

const routes: Routes = [{ path: '', component: ErrorCompletionSubscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorCompletionSubscriptionRoutingModule { }
