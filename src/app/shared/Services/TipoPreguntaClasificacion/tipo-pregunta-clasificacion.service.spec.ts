import { TestBed } from '@angular/core/testing';

import { TipoPreguntaClasificacionService } from './tipo-pregunta-clasificacion.service';

describe('TipoPreguntaClasificacionService', () => {
  let service: TipoPreguntaClasificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPreguntaClasificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
