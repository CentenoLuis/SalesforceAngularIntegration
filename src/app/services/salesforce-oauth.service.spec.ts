import { TestBed } from '@angular/core/testing';

import { SalesforceOAuthService } from './salesforce-oauth.service';

describe('SalesforceOAuthService', () => {
  let service: SalesforceOAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesforceOAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
