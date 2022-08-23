import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoReporteComponent } from './entrenamiento-reporte.component';

describe('EntrenamientoReporteComponent', () => {
  let component: EntrenamientoReporteComponent;
  let fixture: ComponentFixture<EntrenamientoReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenamientoReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenamientoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
