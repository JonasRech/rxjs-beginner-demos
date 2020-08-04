import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'what-are-streams', pathMatch: 'full' },
  { path: 'what-are-streams', loadChildren: () => import('./what-are-streams/what-are-streams.module').then(m => m.WhatAreStreamsModule) },
  { path: 'streams-the-rxjs-way', loadChildren: () => import('./streams-the-rxjs-way/streams-the-rxjs-way.module').then(m => m.StreamsTheRxjsWayModule) },
  { path: 'combine-multiple-streams', loadChildren: () => import('./combine-multiple-streams/combine-multiple-streams.module').then(m => m.CombineMultipleStreamsModule) },
  { path: 'error-completion-subscription', loadChildren: () => import('./error-completion-subscription/error-completion-subscription.module').then(m => m.ErrorCompletionSubscriptionModule) },
  { path: 'build-own-observable', loadChildren: () => import('./build-own-observable/build-own-observable.module').then(m => m.BuildOwnObservableModule) },
  { path: 'map-operator', loadChildren: () => import('./map-operator/map-operator.module').then(m => m.MapOperatorModule) },
  { path: 'caching', loadChildren: () => import('./caching/caching.module').then(m => m.CachingModule) },
  { path: 'imperative-design', loadChildren: () => import('./imperative-design/imperative-design.module').then(m => m.ImperativeDesignModule) },
  { path: 'reactive-design', loadChildren: () => import('./reactive-design/reactive-design.module').then(m => m.ReactiveDesignModule) },
  { path: 'misc-stuff', loadChildren: () => import('./misc-stuff/misc-stuff.module').then(m => m.MiscStuffModule) },
  { path: 'finish', loadChildren: () => import('./finish/finish.module').then(m => m.FinishModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
