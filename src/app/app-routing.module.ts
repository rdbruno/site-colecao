import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },

  { path: 'menu',
    component: MenuComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'selos' },
      {
        path: 'selos',
        loadChildren: () => import('./modules/selos/selos.module').then(m => m.SelosModule)
      },
      {
        path: 'ferromodelismo',
        loadChildren: () => import('./modules/ferromodelismo/ferromodelismo.module').then(m => m.FerromodelismoModule)
      },
      {
        path: 'embalagens',
        loadChildren: () => import('./modules/embalagens/embalagens.module').then(m => m.EmbalagensModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
