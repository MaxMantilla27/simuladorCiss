import { TestBed } from '@angular/core/testing';

import { CantidadExamenService } from './cantidad-examen.service';

describe('CantidadExamenService', () => {
  let service: CantidadExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantidadExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
