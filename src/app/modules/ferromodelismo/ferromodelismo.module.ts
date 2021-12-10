import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrensListComponent } from './trens-list/trens-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FerromodelismoRoutingModule } from './ferromodelismo-routing.module';

@NgModule({
  declarations: [ 
    TrensListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FerromodelismoRoutingModule
  ]
})
export class FerromodelismoModule { }