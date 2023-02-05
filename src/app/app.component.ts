import { Component } from '@angular/core';
import { Observable } from 'rxjs';
/* import { SalesforceOAuthService } from 'src/app/services/salesforce-oauth.service';
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SalesforceIntegration';
  response$!: Observable<Object>;

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
