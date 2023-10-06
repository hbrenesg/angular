import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosWAComponent } from './pedidos-wa.component';

describe('PedidosWAComponent', () => {
  let component: PedidosWAComponent;
  let fixture: ComponentFixture<PedidosWAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosWAComponent]
    });
    fixture = TestBed.createComponent(PedidosWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
