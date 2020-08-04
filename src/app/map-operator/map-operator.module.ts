import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapOperatorRoutingModule } from './map-operator-routing.module';
import { MapOperatorComponent } from './map-operator.component';


@NgModule({
  declarations: [MapOperatorComponent],
  imports: [
    CommonModule,
    MapOperatorRoutingModule
  ]
})
export class MapOperatorModule { }
