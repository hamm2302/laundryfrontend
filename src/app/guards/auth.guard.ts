import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      // Token ada, arahkan ke halaman 'beranda'
      this.router.navigateByUrl('o-tabs/beranda');
      return false; // Return false untuk memblokir navigasi ke halaman 'login'
    }
    return true; // Return true untuk mengizinkan navigasi ke halaman 'login'
  }
}
