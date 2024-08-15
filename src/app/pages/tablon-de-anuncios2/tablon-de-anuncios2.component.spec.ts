import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablonDeAnuncios2Component } from './tablon-de-anuncios2.component';

describe('TablonDeAnuncios2Component', () => {
  let component: TablonDeAnuncios2Component;
  let fixture: ComponentFixture<TablonDeAnuncios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablonDeAnuncios2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablonDeAnuncios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
