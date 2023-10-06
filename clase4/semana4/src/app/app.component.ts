import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semana4';

  activo: boolean = false
  a: number = 10
  b: number = 5
  valor: string = 'si'

  aFunction = (): boolean => false

  usuarios = ['Pedro', 'Manuel', 'Juan', 'Ana', 'Maria']

  colorSeleccionado: string = ''

  colores: string[] = ['green', 'red', 'blue', 'yellow']

  onColorSelectHandler = (e: any) => this.colorSeleccionado = e.target.value
}

