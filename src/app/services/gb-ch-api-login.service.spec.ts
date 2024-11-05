import { TestBed } from '@angular/core/testing';

import { GBCHApiLoginService } from './gb-ch-api-login.service';

describe('GBCHApiLoginService', () => {
  let service: GBCHApiLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GBCHApiLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
