import { Component, Input } from '@angular/core';
import { Supermercado } from 'src/app/interfaces/supermercado';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  @Input('informacionHorarios') horarios1: string[] = []
  @Input('informacionNombres') nombres1: string[] = []
  @Input('vieneDesdeInicio') vieneDesdeInicio: boolean = false

  tresJsMarket1: Supermercado = {
    nombre: "3J's Market #1",
    horario: ['Lunes a Viernes: 6:30 a.m - 10:00 p.m', 'Sábados y Domingos: 7:00 a.m - 10:00 p.m'],
    whatsApp: 89936618,
    ubicacion: 'Costado sur del parquecito Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }
  tresJsMarket2: Supermercado = {
    nombre: "3J's Market #2",
    horario: ['Lunes a Viernes: 6:30 a.m - 9:00 p.m', 'Sábados y Domingos: 7:00 a.m - 9:00 p.m'],
    whatsApp: 86305739,
    ubicacion: '600 metros este de Repuestos El Quijote, Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }
  tresJsMarket3: Supermercado = {
    nombre: "3J's Market #3",
    horario: ['Lunes a Viernes: 6:30 a.m - 8:30 p.m', 'Sábados y Domingos: 7:00 a.m - 8:30 p.m'],
    whatsApp: 85107015,
    ubicacion: ' Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }

  horarios2: string[] = [this.tresJsMarket1.horario[0], this.tresJsMarket1.horario[1],
  this.tresJsMarket2.horario[0], this.tresJsMarket2.horario[1],
  this.tresJsMarket3.horario[0], this.tresJsMarket3.horario[1]]

  nombres2: string[] = [this.tresJsMarket1.nombre, this.tresJsMarket2.nombre, this.tresJsMarket3.nombre]
}
