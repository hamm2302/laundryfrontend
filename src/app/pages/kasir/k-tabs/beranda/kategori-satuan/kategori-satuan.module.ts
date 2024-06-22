import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriSatuanPageRoutingModule } from './kategori-satuan-routing.module';

import { KategoriSatuanPage } from './kategori-satuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriSatuanPageRoutingModule
  ],
  declarations: [KategoriSatuanPage]
})
export class KategoriSatuanPageModule {}
