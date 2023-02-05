import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class SalesforceOAuthService {
  constructor(private http: HttpClient) {}

  getTokenService(): Observable<Object> {
    return this.http.get('http://localhost:3000/login');
  }

  getGoogleOauth(): Observable<Object> {
    return this.http.get('http://localhost:3000/auth/google');
  }

  getUserSession(user: Usuario) {
    console.log('Dentro de getUserSession***', JSON.stringify(user));
    return this.http.post<any>('http://localhost:3000/getSession', user);
  }
}
