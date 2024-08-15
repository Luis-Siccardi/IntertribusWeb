import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresDePuntosComponent } from './contadores-de-puntos.component';

describe('ContadoresDePuntosComponent', () => {
  let component: ContadoresDePuntosComponent;
  let fixture: ComponentFixture<ContadoresDePuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadoresDePuntosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadoresDePuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
