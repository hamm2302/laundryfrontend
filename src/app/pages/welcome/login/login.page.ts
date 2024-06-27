import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  presentingElement: any = null;

  constructor(
    public api: ApiService,
    public router: Router
  ) { }


  form = {
    email: '',
    password: '',
    error:""
  }
//Login
  ngOnInit() {
    let token = localStorage.getItem('token');

    // if (token && token !== '') {
    //   console.log('login');
    //   this.router.navigateByUrl('/c-tabs');
    // }
    if (token) {
      if(token != ''){
        console.log('login');
        this.router.navigateByUrl('o-tabs/beranda');
      }
    }
    this.presentingElement = document.querySelector('.ion-page');
  }

  async login() {
    this.api.login(this.form);
    // this.showAlert("Login Successfully", "Welcome to Hamm Laundry");
    // this.router.navigate(['/tabs/home']);
  }

}
