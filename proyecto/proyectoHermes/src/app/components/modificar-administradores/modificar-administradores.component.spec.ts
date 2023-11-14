import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAdministradoresComponent } from './modificar-administradores.component';

describe('ModificarAdministradoresComponent', () => {
  let component: ModificarAdministradoresComponent;
  let fixture: ComponentFixture<ModificarAdministradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarAdministradoresComponent]
    });
    fixture = TestBed.createComponent(ModificarAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
