import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoPreguntaComponent } from './entrenamiento-pregunta.component';

describe('EntrenamientoPreguntaComponent', () => {
  let component: EntrenamientoPreguntaComponent;
  let fixture: ComponentFixture<EntrenamientoPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenamientoPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenamientoPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
