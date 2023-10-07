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
    window.location.href = "https://wa.me/" + numeroWA + "?text=Hola!%20Muchas%20gracias%20por%20escribirnos.%20En%que%20le%20podemos%20servir"
  }
}
