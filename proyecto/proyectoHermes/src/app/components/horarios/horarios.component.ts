import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  @Input('informacionHorarios') horarios: string[] = []
  @Input('informacionNombres') nombres: string[] = []
}
