import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PesananService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  simpanPesanan(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/simpan-pesanan`, data);
  }

  getAllPesanan(): Observable<any[]> {
    console.log('Fetching pesanan list');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/pesananall`, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getPesananById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/pesanan/${id}`, { headers: headers })
      .pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  updateStatus(id: number,): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'  // Jika perlu, sesuaikan content type dengan kebutuhan API
    });
    const body = { status: status };  // Sesuaikan dengan struktur body yang dibutuhkan oleh API
  
    return this.http.patch<any>(`${this.apiUrl}/pesanan/status/${id}`, body, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }
}
