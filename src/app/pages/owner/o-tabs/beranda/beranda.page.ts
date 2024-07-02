import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async logout() {
    await this.authService.logout();
    localStorage.clear()
    this.router.navigateByUrl('/onboard', { replaceUrl: true });
  }

  ngOnInit() {
  }

}
