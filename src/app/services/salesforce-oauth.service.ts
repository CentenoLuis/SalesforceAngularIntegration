import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesforceOAuthService {
  constructor(private http: HttpClient) {}

  getTokenService(): Observable<Object> {
    return this.http.get('http://localhost:3000/login');
  }
}
