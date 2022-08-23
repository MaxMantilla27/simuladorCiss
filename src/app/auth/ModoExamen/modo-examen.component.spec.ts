import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoExamenComponent } from './modo-examen.component';

describe('ModoExamenComponent', () => {
  let component: ModoExamenComponent;
  let fixture: ComponentFixture<ModoExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
