import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImperativeDesignRoutingModule } from './imperative-design-routing.module';
import { ImperativeDesignComponent } from './imperative-design.component';


@NgModule({
  declarations: [ImperativeDesignComponent],
  imports: [
    CommonModule,
    ImperativeDesignRoutingModule
  ]
})
export class ImperativeDesignModule { }
