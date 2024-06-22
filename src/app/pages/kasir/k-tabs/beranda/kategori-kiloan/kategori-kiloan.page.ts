import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori-kiloan',
  templateUrl: './kategori-kiloan.page.html',
  styleUrls: ['./kategori-kiloan.page.scss'],
})
export class KategoriKiloanPage implements OnInit {

  namaPelanggan: any;
  noHp: any;
  alamat: any;
  totalKiloan: any;
  hargaPerKilo: number = 7000; // Harga per kilo
  totalHarga: any;

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  // Method untuk menghitung total harga
  calculateTotalHarga() {
    this.totalHarga = this.totalKiloan * this.hargaPerKilo;
  }

  async bayar() {
    this.calculateTotalHarga(); // Hitung total harga sebelum menyimpan pesanan

    const alert = await this.alertController.create({
      header: 'Pesanan Sukses',
      message: 'Pesanan Anda telah berhasil.',
      buttons: ['OK']
    });

    await alert.present();

    let pesananList = [];

    try {
      const storedPesananList = localStorage.getItem('pesananList');
      if (storedPesananList) {
        pesananList = JSON.parse(storedPesananList);
      }
    } catch (e) {
      console.error('Error parsing JSON from localStorage', e);
    }

    const newPesanan = {
      namaPelanggan: this.namaPelanggan,
      noHp: this.noHp,
      alamat: this.alamat,
      totalKiloan: this.totalKiloan,
      totalHarga: this.totalHarga // Tambahkan total harga ke pesanan
    };

    pesananList.push(newPesanan);

    try {
      localStorage.setItem('pesananList', JSON.stringify(pesananList));
    } catch (e) {
      console.error('Error saving JSON to localStorage', e);
    }

    this.router.navigate(['/pesanan']);
  }
}
