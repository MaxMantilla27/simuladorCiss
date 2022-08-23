import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioRespuestaPreguntaComponent } from './estudio-respuesta-pregunta.component';

describe('EstudioRespuestaPreguntaComponent', () => {
  let component: EstudioRespuestaPreguntaComponent;
  let fixture: ComponentFixture<EstudioRespuestaPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioRespuestaPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioRespuestaPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
