import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriKiloanPage } from './kategori-kiloan.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriKiloanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriKiloanPageRoutingModule {}
