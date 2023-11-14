import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supermercado } from 'src/app/interfaces/supermercado';

@Component({
  selector: 'app-pedidos-wa',
  templateUrl: './pedidos-wa.component.html',
  styleUrls: ['./pedidos-wa.component.css']
})
export class PedidosWAComponent {
  @Input('informacionNombres') nombres1: string[] = []
  @Input('informacionNumerosWA') numerosWA1: number[] = []
  @Input('vieneDesdeInicio') vieneDesdeInicio: boolean = false

  enviarMensaje(e: any, numeroWA: number) {
    window.location.href = "https://wa.me/" + numeroWA + "?text=Hola!%20Muchas%20gracias%20por%20escribirnos.%20En%20que%20le%20podemos%20servir"
  }

  tresJsMarket1: Supermercado = {
    nombre: "3J's Market #1",
    horario: ['Lunes a Viernes: 6:30 a.m - 10:00 p.m', 'Sábados y Domingos: 7:00 a.m - 10:00 p.m'],
    whatsApp: 50689936618,
    ubicacion: 'Costado sur del parquecito Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }
  tresJsMarket2: Supermercado = {
    nombre: "3J's Market #2",
    horario: ['Lunes a Viernes: 6:30 a.m - 9:00 p.m', 'Sábados y Domingos: 7:00 a.m - 9:00 p.m'],
    whatsApp: 50686305739,
    ubicacion: '600 metros este de Repuestos El Quijote, Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }
  tresJsMarket3: Supermercado = {
    nombre: "3J's Market #3",
    horario: ['Lunes a Viernes: 6:30 a.m - 8:30 p.m', 'Sábados y Domingos: 7:00 a.m - 8:30 p.m'],
    whatsApp: 50685107015,
    ubicacion: ' Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }

  horarios: string[] = [this.tresJsMarket1.horario[0], this.tresJsMarket1.horario[1],
  this.tresJsMarket2.horario[0], this.tresJsMarket2.horario[1],
  this.tresJsMarket3.horario[0], this.tresJsMarket3.horario[1]]

  nombres2: string[] = [this.tresJsMarket1.nombre, this.tresJsMarket2.nombre, this.tresJsMarket3.nombre]

  numerosWA2: number[] = [this.tresJsMarket1.whatsApp, this.tresJsMarket2.whatsApp, this.tresJsMarket3.whatsApp]
}
