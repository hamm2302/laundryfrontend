import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OTabsPage } from './o-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: OTabsPage,
    children:[
      {
        path: 'beranda',
        loadChildren: () => import('./beranda/beranda.module').then( m => m.BerandaPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OTabsPageRoutingModule {}
