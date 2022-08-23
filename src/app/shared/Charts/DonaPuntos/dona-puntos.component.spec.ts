import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaPuntosComponent } from './dona-puntos.component';

describe('DonaPuntosComponent', () => {
  let component: DonaPuntosComponent;
  let fixture: ComponentFixture<DonaPuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaPuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
