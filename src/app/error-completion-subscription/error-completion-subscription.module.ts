import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorCompletionSubscriptionRoutingModule } from './error-completion-subscription-routing.module';
import { ErrorCompletionSubscriptionComponent } from './error-completion-subscription.component';


@NgModule({
  declarations: [ErrorCompletionSubscriptionComponent],
  imports: [
    CommonModule,
    ErrorCompletionSubscriptionRoutingModule
  ]
})
export class ErrorCompletionSubscriptionModule { }
