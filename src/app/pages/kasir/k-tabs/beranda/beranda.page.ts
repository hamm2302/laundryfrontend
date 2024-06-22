import { Component } from '@angular/core';
// import { IonModal, ModalController } from '@ionic/angular';
// import { OverlayEventDetail } from '@ionic/core/components';
import { ModalController } from '@ionic/angular';
import { ModalPesananComponent } from 'src/app/components/modal-pesanan/modal-pesanan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // @ViewChild(IonModal) modal: any;
  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: any;
  // phoneNumber: any;
  // address: any;
  // category: any;

  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

  // confirm() {
  //   this.modal.dismiss(this.name, 'confirm');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }
  // income: number = 0;
  // expense: number = 0;

  constructor(private modalCtrl: ModalController
    , private router: Router
  ) { }

  async openOrderModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPesananComponent
    });
    modal.present();
  }

  goLayanan() {
    this.router.navigateByUrl('k-tabs/beranda/layanan');
  }

  goLaporan() {
    this.router.navigateByUrl('k-tabs/beranda/laporan');
  }
  
  // ngOnInit() {
  // }

}
