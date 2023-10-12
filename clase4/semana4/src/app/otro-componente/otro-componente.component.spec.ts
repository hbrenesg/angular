import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroComponenteComponent } from './otro-componente.component';

describe('OtroComponenteComponent', () => {
  let component: OtroComponenteComponent;
  let fixture: ComponentFixture<OtroComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtroComponenteComponent]
    });
    fixture = TestBed.createComponent(OtroComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
