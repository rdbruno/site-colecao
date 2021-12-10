import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrensListComponent } from './trens-list/trens-list.component';

const routes: Routes = [
    { path: '', component: TrensListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FerromodelismoRoutingModule { }