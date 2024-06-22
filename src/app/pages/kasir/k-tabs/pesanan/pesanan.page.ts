import { Component, OnInit } from '@angular/core';
import { PesananService } from '../../../../services/pesanan/pesanan.service';

interface Layanan {
  id: number;
  nama: string;
}

interface Pelanggan {
  id: number;
  nama: string;
}

interface Pesanan {
  id: number;
  layanan: Layanan;
  pelanggan: Pelanggan;
  jumlah: number;
  tanggal_pemesanan: string;
  status: string;
  total_harga: number;
}

@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss']
})
export class PesananPage implements OnInit {

  pesananList: Pesanan[] = [];

  constructor(private pesananService: PesananService) { }

  ngOnInit(): void {
    this.getAllPesanan();
  }

  getAllPesanan(): void {
    this.pesananService.getAllPesanan()
      .subscribe(
        data => {
          this.pesananList = data;
          console.log('Pesanan list:', data);
        },
        error => {
          console.error('Error fetching pesanan:', error);
          alert('Terjadi kesalahan saat mengambil data pesanan. Silakan coba lagi.');
        }
      );
  }
}
