import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineMultipleStreamsRoutingModule } from './combine-multiple-streams-routing.module';
import { CombineMultipleStreamsComponent } from './combine-multiple-streams.component';


@NgModule({
  declarations: [CombineMultipleStreamsComponent],
  imports: [
    CommonModule,
    CombineMultipleStreamsRoutingModule
  ]
})
export class CombineMultipleStreamsModule { }
