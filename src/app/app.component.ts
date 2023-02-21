import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario';
import { SalesforceOAuthService } from './services/salesforce-oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SalesforceIntegration';
  response$!: Observable<Object>;

  user?: Usuario;

  constructor(private auth: SalesforceOAuthService) {}

  ngOnInit(): void {
    this.auth.myUser$.subscribe((user) => (this.user = user));
  }

  /*   constructor(private salesforceOauthService: SalesforceOAuthService) {}
   */
  /*   googleOauth() {
    console.log('***Inside of googleAuth');
    this.salesforceOauthService.getGoogleOauth().subscribe((resp) => {
      console.log('Response from Google Auth', resp);
      this.response$ = resp;
      console.log('response$ = ' + resp);
    });
  } */
}
