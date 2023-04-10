import { TestBed } from '@angular/core/testing';

import { ConfiguracionSimuladorService } from './configuracion-simulador.service';

describe('ConfiguracionSimuladorService', () => {
  let service: ConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
