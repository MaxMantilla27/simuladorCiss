import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenRespuestaPreguntaComponent } from './examen-respuesta-pregunta.component';

describe('ExamenRespuestaPreguntaComponent', () => {
  let component: ExamenRespuestaPreguntaComponent;
  let fixture: ComponentFixture<ExamenRespuestaPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenRespuestaPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenRespuestaPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
