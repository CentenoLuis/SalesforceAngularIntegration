import { Component, OnInit } from '@angular/core';
import { SalesforceOAuthService } from 'src/app/services/salesforce-oauth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  response$!: Observable<Object>;

  constructor(private salesforceOauthService: SalesforceOAuthService) {}

  ngOnInit(): void {}

  getToken() {
    this.salesforceOauthService.getTokenService().subscribe((resp) => {
      console.log('Response: ', resp);
    });
  }
}
