import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { saveValidationGuard } from './save-validation.guard';

describe('saveValidationGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => saveValidationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
