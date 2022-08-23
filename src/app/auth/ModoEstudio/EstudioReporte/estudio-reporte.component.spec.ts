import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioReporteComponent } from './estudio-reporte.component';

describe('EstudioReporteComponent', () => {
  let component: EstudioReporteComponent;
  let fixture: ComponentFixture<EstudioReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
