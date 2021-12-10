import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelosListComponent } from './selos-list/selos-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { SelosRoutingModule } from './selos-routing.module';

@NgModule({
  declarations: [ 
    SelosListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SelosRoutingModule
  ]
})
export class SelosModule { }