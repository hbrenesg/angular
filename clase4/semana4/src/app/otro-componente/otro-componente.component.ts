import { Component } from '@angular/core';
import { ColoresService } from '../colores.service';

@Component({
  selector: 'app-otro-componente',
  templateUrl: './otro-componente.component.html',
  styleUrls: ['./otro-componente.component.css']
})
export class OtroComponenteComponent {
  //colores: string[] = []

  //Esta es una nueva instancia
  // coloresService = new ColoresService()
  // colores = this.coloresService.coloresExtendidos


  //En cambio esta siguiente es igual a la otra ya creada en app.component.ts.
  // coloresService: ColoresService

  // constructor(coloresService: ColoresService) {
  //   this.coloresService = coloresService
  // }

  //Lo anterior es lo mismo pero con menos codigo
  constructor(public coloresService: ColoresService) { }
}
