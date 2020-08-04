import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CachingRoutingModule } from './caching-routing.module';
import { CachingComponent } from './caching.component';


@NgModule({
  declarations: [CachingComponent],
  imports: [
    CommonModule,
    CachingRoutingModule
  ]
})
export class CachingModule { }
