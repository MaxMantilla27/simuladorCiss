import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosSimulacionesComponent } from './resultados-simulaciones.component';

describe('ResultadosSimulacionesComponent', () => {
  let component: ResultadosSimulacionesComponent;
  let fixture: ComponentFixture<ResultadosSimulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosSimulacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosSimulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
