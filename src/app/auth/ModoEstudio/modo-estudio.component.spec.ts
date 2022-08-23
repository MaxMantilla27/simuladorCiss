import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoEstudioComponent } from './modo-estudio.component';

describe('ModoEstudioComponent', () => {
  let component: ModoEstudioComponent;
  let fixture: ComponentFixture<ModoEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
