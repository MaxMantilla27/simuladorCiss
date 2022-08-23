import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacionesGuardadasComponent } from './simulaciones-guardadas.component';

describe('SimulacionesGuardadasComponent', () => {
  let component: SimulacionesGuardadasComponent;
  let fixture: ComponentFixture<SimulacionesGuardadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacionesGuardadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacionesGuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
