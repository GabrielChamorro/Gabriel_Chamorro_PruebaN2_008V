import { TestBed } from '@angular/core/testing';

import { GbChApiProductosService } from './gb-ch-api-productos.service';

describe('GbChApiProductosService', () => {
  let service: GbChApiProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbChApiProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
