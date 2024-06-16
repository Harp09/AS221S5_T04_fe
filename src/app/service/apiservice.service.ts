import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private http = inject(HttpClient);

  getData(endpoint: string): Observable<any> {
    const url = `${API_URL}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<any>(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  sendMessage(endpoint: string, data: any): Observable<any> {
    const url = `${API_URL}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });

    return this.http.post<any>(url, data, { headers, responseType: 'text' as 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  updateMessage(endpoint: string, data: any): Observable<any> {
    const url = `${API_URL}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });

    return this.http.put<any>(url, data, { headers, responseType: 'text' as 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  changeStatus(endpoint: string, id: number): Observable<any> {
    const url = `${API_URL}/${endpoint}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<any>(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error fetching data: ', error);
    return throwError(error);
  }
}
