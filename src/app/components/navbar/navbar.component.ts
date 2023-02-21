import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { SalesforceOAuthService } from 'src/app/services/salesforce-oauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user?: Usuario = {
    username: '',
    password: '',
    orgType: '',
    secretId: '',
  };

  /*   constructor(private auth: SalesforceOAuthService) {}

  ngOnInit(): void {
    this.auth.myUser$.subscribe((user) => (this.user = user));
  } */
}
