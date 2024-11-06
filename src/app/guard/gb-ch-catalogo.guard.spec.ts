import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gbChCatalogoGuard } from './gb-ch-catalogo.guard';

describe('gbChCatalogoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gbChCatalogoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
