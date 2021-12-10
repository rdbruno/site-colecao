import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CigarroListComponent } from './cigarro-list/cigarro-list.component';

const routes: Routes = [
    { path: '', component: CigarroListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbalagensRoutingModule { }