import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CigarroListComponent } from './cigarro-list/cigarro-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { EmbalagensRoutingModule } from './embalagens-routing.module';

@NgModule({
  declarations: [ 
    CigarroListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmbalagensRoutingModule
  ]
})
export class EmbalagensModule { }