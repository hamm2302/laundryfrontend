import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriSatuanPage } from './kategori-satuan.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriSatuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriSatuanPageRoutingModule {}
