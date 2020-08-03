import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'what-are-streams', pathMatch: 'full' },
  { path: 'what-are-streams', loadChildren: () => import('./what-are-streams/what-are-streams.module').then(m => m.WhatAreStreamsModule) },
  { path: 'streams-the-rxjs-way', loadChildren: () => import('./streams-the-rxjs-way/streams-the-rxjs-way.module').then(m => m.StreamsTheRxjsWayModule) },
  { path: 'combine-multiple-streams', loadChildren: () => import('./combine-multiple-streams/combine-multiple-streams.module').then(m => m.CombineMultipleStreamsModule) },
  { path: 'error-completion-subscription', loadChildren: () => import('./error-completion-subscription/error-completion-subscription.module').then(m => m.ErrorCompletionSubscriptionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
