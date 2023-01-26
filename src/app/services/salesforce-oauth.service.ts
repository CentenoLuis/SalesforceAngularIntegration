import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesforceOAuthService {
  body: String =
    'response_type=id_token&client_id=3MVG9ux34Ig8G5er5gpUI.S2tetFVvxTG77auUSbSrLCT6M8_Gp6dIvxPzF7kOmK0UG3VHmGZaFhCwead9Zsq&redirect_uri=https://localhost:4200';
  /* body: String =
    'client_id=3MVG9ux34Ig8G5er5gpUI.S2tetFVvxTG77auUSbSrLCT6M8_Gp6dIvxPzF7kOmK0UG3VHmGZaFhCwead9Zsq&redirect_uri=http://localhost:4200&grant_type=code'; */
  url: String = 'https://login.salesforce.com/services/oauth2/token';

  constructor(private http: HttpClient) {}

  getTokenService(): Observable<Object> {
    return this.http.get('http://localhost:3000/login');
  }
}
