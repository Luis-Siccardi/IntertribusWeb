import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadorDePuntosComponent } from './marcador-de-puntos.component';

describe('MarcadorDePuntosComponent', () => {
  let component: MarcadorDePuntosComponent;
  let fixture: ComponentFixture<MarcadorDePuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcadorDePuntosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcadorDePuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
