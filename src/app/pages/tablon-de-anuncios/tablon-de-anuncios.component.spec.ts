import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablonDeAnunciosComponent } from './tablon-de-anuncios.component';

describe('TablonDeAnunciosComponent', () => {
  let component: TablonDeAnunciosComponent;
  let fixture: ComponentFixture<TablonDeAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablonDeAnunciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablonDeAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
