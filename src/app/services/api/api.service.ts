import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export default api;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  public login(form: any) {
    this.http
      .post(environment.ApiURL + 'login', {
        email: form.email,
        password: form.password,
      })
      .subscribe(async (res: any) => {
        console.log(res);
        localStorage.setItem('token', res['token']);
        this.router.navigateByUrl('k-tabs/beranda');
      });
    // console.log(form);
  }

  // register
  public register(form: any) {
    this.http
      .post(environment.ApiURL + 'register', {
        name: form.name,
        email: form.email,
        password: form.password,
      })
      .subscribe((res: any) => {
        console.log(res);
        // if (res['status'] == 200)
        this.router.navigateByUrl('onboard');
      });
  }
}
