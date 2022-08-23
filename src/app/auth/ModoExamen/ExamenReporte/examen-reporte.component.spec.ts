import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenReporteComponent } from './examen-reporte.component';

describe('ExamenReporteComponent', () => {
  let component: ExamenReporteComponent;
  let fixture: ComponentFixture<ExamenReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
