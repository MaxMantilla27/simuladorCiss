import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioPreguntaComponent } from './estudio-pregunta.component';

describe('EstudioPreguntaComponent', () => {
  let component: EstudioPreguntaComponent;
  let fixture: ComponentFixture<EstudioPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
