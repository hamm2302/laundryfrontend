import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axiosInstance from '../../pages/library/axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';

  constructor(
    private http: HttpClient
  ) { }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  jwt(){
    let token = localStorage.getItem('token')
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin' : '*'
    })
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  async logout() {
    const token = this.getToken();
    if (token) {
      const response = await axiosInstance.get('/logout');
      if (response.status) {
        this.removeToken();
      }
    }
  }

  async isAuthenticated(): Promise<boolean> {
    const token = await this.jwt();
    return token !== null;
  }

  public registerOwner(form : any){
    return this.http.post(environment.ApiURL + '/register/owner',
      {
        "nama": form.nama,
        "email": form.email,
        "password": form.password
      },
      { responseType: 'json'}
    )
  }

  public login(form : any){
    return this.http.post(environment.ApiURL + '/login',
      {
        "email": form.email,
        "password": form.password
      },
      { responseType: 'json'}
    )
  }

}
