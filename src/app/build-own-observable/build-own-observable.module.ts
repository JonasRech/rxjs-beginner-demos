import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildOwnObservableRoutingModule } from './build-own-observable-routing.module';
import { BuildOwnObservableComponent } from './build-own-observable.component';


@NgModule({
  declarations: [BuildOwnObservableComponent],
  imports: [
    CommonModule,
    BuildOwnObservableRoutingModule
  ]
})
export class BuildOwnObservableModule { }
