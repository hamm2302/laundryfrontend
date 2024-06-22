import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerandaPage } from './beranda.page';

const routes: Routes = [
  {
    path: '',
    component: BerandaPage
  },
  {
    path: 'kategori-kiloan',
    loadChildren: () => import('./kategori-kiloan/kategori-kiloan.module').then( m => m.KategoriKiloanPageModule)
  },
  {
    path: 'kategori-satuan',
    loadChildren: () => import('./kategori-satuan/kategori-satuan.module').then( m => m.KategoriSatuanPageModule)
  },
  {
    path: 'kategori-express',
    loadChildren: () => import('./kategori-express/kategori-express.module').then( m => m.KategoriExpressPageModule)
  },  {
    path: 'layanan',
    loadChildren: () => import('./layanan/layanan.module').then( m => m.LayananPageModule)
  },
  {
    path: 'laporan',
    loadChildren: () => import('./laporan/laporan.module').then( m => m.LaporanPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerandaPageRoutingModule {}
