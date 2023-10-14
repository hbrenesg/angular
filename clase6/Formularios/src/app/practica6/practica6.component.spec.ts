import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica6Component } from './practica6.component';

describe('Practica6Component', () => {
  let component: Practica6Component;
  let fixture: ComponentFixture<Practica6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica6Component]
    });
    fixture = TestBed.createComponent(Practica6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
