import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaporanService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Sesuaikan dengan URL backend Anda

  constructor(private http: HttpClient) { }

  // Fungsi untuk mengambil semua laporan
  getLaporan(): Observable<any[]> {
    console.log('Fetching laporan list');

    const token = localStorage.getItem('token'); // Ambil token dari localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.apiUrl}/laporans`, { headers: headers }).pipe(
      catchError(error => {
        console.error('Error fetching laporan', error);
        return throwError(error); // Rethrow error to handle in component
      })
    );
  }

  // Fungsi untuk membuat atau memperbarui laporan
  createLaporan(laporan: any): Observable<any> {
    const token = localStorage.getItem('token'); // Ambil token dari localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(`${this.apiUrl}/laporan`, laporan, { headers: headers }).pipe(
      catchError(error => {
        console.error('Error adding laporan', error);
        return throwError(error); // Rethrow error to handle in component
      })
    );
  }
}
