import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelosListComponent } from './selos-list/selos-list.component';

const routes: Routes = [
    { path: '', component: SelosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelosRoutingModule { }