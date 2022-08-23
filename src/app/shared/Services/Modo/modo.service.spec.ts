import { TestBed } from '@angular/core/testing';

import { ModoService } from './modo.service';

describe('ModoService', () => {
  let service: ModoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
