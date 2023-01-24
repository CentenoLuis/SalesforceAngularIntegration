import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SalesforceOAuthService } from './services/salesforce-oauth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [SalesforceOAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
