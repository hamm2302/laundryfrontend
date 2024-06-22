import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriKiloanPageRoutingModule } from './kategori-kiloan-routing.module';

import { KategoriKiloanPage } from './kategori-kiloan.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriKiloanPageRoutingModule
  ],
  declarations: [KategoriKiloanPage]
})
export class KategoriKiloanPageModule {}
