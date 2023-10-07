import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSugerenciasComponent } from './contacto-sugerencias.component';

describe('ContactoSugerenciasComponent', () => {
  let component: ContactoSugerenciasComponent;
  let fixture: ComponentFixture<ContactoSugerenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoSugerenciasComponent]
    });
    fixture = TestBed.createComponent(ContactoSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
