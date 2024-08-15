import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicacionRutasComponent } from './explicacion-rutas.component';

describe('ExplicacionRutasComponent', () => {
  let component: ExplicacionRutasComponent;
  let fixture: ComponentFixture<ExplicacionRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplicacionRutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicacionRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
