import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  @Input('cliente') cliente: Cliente = { nombre: '', correoElectronico: '', supermercadoAsociado: '', mensaje: '' }


}
