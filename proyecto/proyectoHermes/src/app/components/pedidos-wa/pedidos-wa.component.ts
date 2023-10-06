import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pedidos-wa',
  templateUrl: './pedidos-wa.component.html',
  styleUrls: ['./pedidos-wa.component.css']
})
export class PedidosWAComponent {
  @Input('informacionNombres') nombres: string[] = []
  @Input('informacionNumerosWA') numerosWA: number[] = []

  enviarMensaje(e: any, numeroWA: number) {
    window.location.href = "https://wa.me/" + numeroWA + "?text=Hola%20me%20gustaría%20hacer%20un%20pedido"
  }
}
