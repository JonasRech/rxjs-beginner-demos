import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDesignRoutingModule } from './reactive-design-routing.module';
import { ReactiveDesignComponent } from './reactive-design.component';


@NgModule({
  declarations: [ReactiveDesignComponent],
  imports: [
    CommonModule,
    ReactiveDesignRoutingModule
  ]
})
export class ReactiveDesignModule { }
