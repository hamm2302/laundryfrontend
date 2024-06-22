import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriExpressPage } from './kategori-express.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriExpressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriExpressPageRoutingModule {}
