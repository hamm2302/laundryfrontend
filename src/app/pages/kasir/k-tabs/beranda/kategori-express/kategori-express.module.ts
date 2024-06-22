import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriExpressPageRoutingModule } from './kategori-express-routing.module';

import { KategoriExpressPage } from './kategori-express.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriExpressPageRoutingModule
  ],
  declarations: [KategoriExpressPage]
})
export class KategoriExpressPageModule {}
