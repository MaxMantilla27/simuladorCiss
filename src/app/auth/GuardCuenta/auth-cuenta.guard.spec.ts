import { TestBed } from '@angular/core/testing';

import { AuthCuentaGuard } from './auth-cuenta.guard';

describe('AuthCuentaGuard', () => {
  let guard: AuthCuentaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCuentaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
