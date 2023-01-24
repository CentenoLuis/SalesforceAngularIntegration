import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesforceOAuthService {
  body: String =
    'client_id=3MVG9ux34Ig8G5er5gpUI.S2tetFVvxTG77auUSbSrLCT6M8_Gp6dIvxPzF7kOmK0UG3VHmGZaFhCwead9Zsq&client_secret=1EE5066FC6E161A6A19C6C847EB383232D6A64235DF1044BB23F8A62DCFB35AA&redirect_uri=http://localhost:4200&password=mysecondITjob108&username=luis001155@gmail.com.mycpq&grant_type=password';
  /* body: String =
    'client_id=3MVG9ux34Ig8G5er5gpUI.S2tetFVvxTG77auUSbSrLCT6M8_Gp6dIvxPzF7kOmK0UG3VHmGZaFhCwead9Zsq&redirect_uri=http://localhost:4200&grant_type=code'; */
  url: String = 'https://login.salesforce.com/services/oauth2/token';

  constructor(private http: HttpClient) {}

  getToken(): Observable<Object> {
    return this.http.post(
      'https://login.salesforce.com/services/oauth2/token',
      this.body
    );
  }
}
