import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoEntrenamientoComponent } from './modo-entrenamiento.component';

describe('ModoEntrenamientoComponent', () => {
  let component: ModoEntrenamientoComponent;
  let fixture: ComponentFixture<ModoEntrenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoEntrenamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
