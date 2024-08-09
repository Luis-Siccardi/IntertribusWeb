import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativaComponent } from './informativa.component';

describe('InformativaComponent', () => {
  let component: InformativaComponent;
  let fixture: ComponentFixture<InformativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
