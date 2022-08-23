import { TestBed } from '@angular/core/testing';

import { AspNetUsersService } from './asp-net-users.service';

describe('AspNetUsersService', () => {
  let service: AspNetUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspNetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
