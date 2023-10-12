import { Component } from '@angular/core';
import { ColoresService } from './colores.service';
import { compileNgModule } from '@angular/compiler';

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


  // colorService: ColoresService

  // constructor(colorService: ColoresService) {
  //   this.colorService = colorService
  //   setTimeout(() => {
  //     colorService.coloresExtendidos.push('Morado')
  //   }, 3000);


  // }

  constructor(public colorService: ColoresService) {
    setTimeout(() => {
      colorService.coloresExtendidos.push('Morado')
    }, 3000);


  }
}

