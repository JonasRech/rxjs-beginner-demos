import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscStuffRoutingModule } from './misc-stuff-routing.module';
import { MiscStuffComponent } from './misc-stuff.component';


@NgModule({
  declarations: [MiscStuffComponent],
  imports: [
    CommonModule,
    MiscStuffRoutingModule
  ]
})
export class MiscStuffModule { }
