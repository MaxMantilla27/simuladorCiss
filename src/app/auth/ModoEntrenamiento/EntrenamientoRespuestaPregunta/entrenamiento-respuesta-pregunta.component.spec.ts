import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoRespuestaPreguntaComponent } from './entrenamiento-respuesta-pregunta.component';

describe('EntrenamientoRespuestaPreguntaComponent', () => {
  let component: EntrenamientoRespuestaPreguntaComponent;
  let fixture: ComponentFixture<EntrenamientoRespuestaPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenamientoRespuestaPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenamientoRespuestaPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
