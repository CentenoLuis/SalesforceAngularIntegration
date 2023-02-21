import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SalesforceOAuthService } from './services/salesforce-oauth.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Login2Component } from './components/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    NavbarComponent,
    ToolbarComponent,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [SalesforceOAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
