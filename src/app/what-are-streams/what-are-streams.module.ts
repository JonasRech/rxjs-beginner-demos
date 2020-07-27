import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatAreStreamsRoutingModule } from './what-are-streams-routing.module';
import { WhatAreStreamsComponent } from './what-are-streams.component';


@NgModule({
  declarations: [WhatAreStreamsComponent],
  imports: [
    CommonModule,
    WhatAreStreamsRoutingModule
  ]
})
export class WhatAreStreamsModule { }
